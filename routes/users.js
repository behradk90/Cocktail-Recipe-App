const express = require('express');
const router = express.Router();
const { signUp, signIn } = require('../controllers/auth.controller')

router.post("/register", signUp, function (req, res) {

});

router.post("/login", signIn, function (req, res) {

});

module.exports = router;