const express = require('express');
const isAuth = require('../middleware/is-auth');
const dashboardController = require('../controller/dashboard');
const router = express.Router();

router.get('/dashboard', isAuth, dashboardController.getDashBoard);

module.exports = router;