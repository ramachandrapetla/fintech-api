const express = require('express');
const router = express.Router();

const authenticationController = require('../controllers/authentication.controller');

router.get('/login', authenticationController.login);

module.exports = router;