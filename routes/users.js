const express = require('express');
const router = express.Router();
const { signUp, signIn } = require('../controllers/auth.controller');
const verifyToken = require('../middleware/authJWT');
const user = require('../models/user');

router.post("/register", signUp, function (req, res) {

});

router.post("/login", signIn, function (req, res) {

});

router.get('/admin', verifyToken, function (req, res) {
    if (!user) {
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