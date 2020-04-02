const express = require('express');
const userController = require('../controllers/user');
const isAuth = require('../middleware/is-auth');
const router = express.Router();

router.get('/donor/home/index',isAuth,userController.getHome);
router.get('/donor/schedules/zip',isAuth,userController.getUserDonate);
router.get('/donor/appointment/list',isAuth,userController.getUserAppointment);
router.get('/donor/history',isAuth,userController.getUserDonation);
router.get('/donor/rateourstaff',isAuth,userController.getUserRate);
router.get('/donor/store',isAuth,userController.getUserStore);
router.get('/donor/account/view',isAuth,userController.getUserAccount);

module.exports = router;