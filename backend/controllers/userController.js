const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

// const createToken = (_id) => {
//     return JWT.sign({ _id }, process.env.API_SECRET, { expiresIn: 86400 });
// }

const signUp = (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        password: bcrypt.hashSync(req.body.password, 8)
    });


    user.save((err, user) => {
        if (err) {
            res.status(500)
                .send({
                    message: err
                });
            return;
        } else {
            res.status(200)
                .send({
                    message: "User registered successfully!"
                })
        }
    });
};

const login = (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .exec((err, user) => {
            if (err) {
                res.status(500)
                    .send({
                        message: "Login error.", err
                    });
                return;
            }
            if (!user) {
                return res.status(404)
                    .send({
                        message: "User not found."
                    });
            }
            // Comparing password
            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            // Checking password validity and responding appropriately
            if (!passwordIsValid) {
                return res.status(401)
                    .send({
                        accessToken: null,
                        message: "Invalid Password!"
                    });
            }
            // Signing token with user id
            //const token = createToken(user._id)
            let token = JWT.sign({
                id: user.id
            }, process.env.API_SECRET, {
                expiresIn: 86400
            });
            // Respond to client request with user profile: success message and access token
            res.status(200)
                .send({
                    user: {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                    },
                    message: "Login Successful.",
                    accessToken: token,
                });
        });
};

module.exports = { signUp, login }