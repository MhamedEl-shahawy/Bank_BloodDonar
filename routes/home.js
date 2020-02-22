const path = require('path');
const express = require('express');
const homeController = require('../controller/home');

const router = express.Router();

router.get('/', homeController.getIndex);
router.get('/bloodNeeds', homeController.getBlood);
router.get('/howToDonate', homeController.getHow);
router.get('/privacy', homeController.getPrivacy);
router.get('/target', homeController.getTarget);


module.exports = router;