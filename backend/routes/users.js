const express = require('express');
const router = express.Router();
const { signUp, login } = require('../controllers/userController');
const verifyToken = require('../middleware/authJWT');
const User = require('../models/userModel');

router.post("/signup", signUp);

router.post("/login", login);

router.get('/admin', verifyToken, function (req, res) {
    if (!User) {
        res.status(403)
            .send({
                message: "Invalid JWT token"
            });
    }
    if (req.user == "admin") {
        res.status(200)
            .send({
                message: "Congratulations! Admin privileges pending..."
            });
    } else {
        res.status(403)
            .send({
                message: "Unauthorized access"
            })
    }
})

module.exports = router;