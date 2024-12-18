const express = require('express');
const {register, login} = require("../controllers/authcontroller")
const router = express.Router();

// User Authentication Routes
// Route for user registration
router.post('/register', register);

// Route for user login
router.post('/login', login);

module.exports = router;

