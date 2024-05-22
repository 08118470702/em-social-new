const express = require('express');
const { registration, login , getUserName, isLoggedIn } = require('../controller/authController');
const authMiddleware = require ("../middleware/auth")
const router = express.Router();

// registration route
router.post('/register', registration);

// login route
router.post ('/login', login)

// get username 
router.get ('/getusername',authMiddleware, getUserName);
// isLoggedIn
router.get ("/isloggedin", isLoggedIn)

module.exports = router;