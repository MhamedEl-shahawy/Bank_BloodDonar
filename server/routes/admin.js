const express = require('express');
const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');
const router = express.Router();

router.get('/add-donor', isAuth, adminController.getAddDonor);
router.post('/add-donor', isAuth, adminController.postAddDonor);
router.get('/display-donors', adminController.getDonors);
router.get('/edit-donor/:donorId', isAuth, adminController.getEditDonor);
router.post('/edit-donor', isAuth, adminController.postEditDonor);
router.post('/delete-donor', isAuth, adminController.postDeleteDonor);

/*Start Patient Routes*/
router.get('/add-patient', isAuth, adminController.getAddPatient);
router.post('/add-patient', isAuth, adminController.postAddPatient);
router.get('/display-patients', adminController.getPatients);
router.get('/edit-patient/:patientId', isAuth, adminController.getEditPatient);
router.post('/edit-patient', isAuth, adminController.postEditPatient);
router.post('/delete-patient', isAuth, adminController.postDeletePatient);
/*End Patient Routes*/

/*Start Charity Routes */
router.get('/add-charity', isAuth, adminController.getAddCharity);
router.post('/add-charity', isAuth, adminController.postAddCharity);
router.get('/display-charities', adminController.getcharities);
router.get('/edit-charity/:charityId', isAuth, adminController.getEditCharity);
router.post('/edit-charity', isAuth, adminController.postEditCharity);
router.post('/delete-charity', isAuth, adminController.postDeleteCharity);
/*End Charity Routes */

/*Start NeededBlood Routes */
router.get('/add-neededBlood', isAuth, adminController.getAddNeededBlood);
router.post('/add-neededBlood', isAuth, adminController.postAddNeededBlood);
router.get('/display-neededBlood', adminController.getNeededBloods);
router.get('/edit-neededBlood/:patientId', isAuth, adminController.getEditNeededBlood);
router.post('/edit-neededBlood', isAuth, adminController.postEditNeededBlood);
router.post('/delete-neededBlood', isAuth, adminController.postDeleteNeededBlood);
/*End NeededBlood Routes */

/*Start Bloods Routes */
router.get('/add-blood', isAuth, adminController.getAddBlood);
router.post('/add-blood', isAuth, adminController.postAddBlood);
router.get('/display-bloods', adminController.getBloods);
router.get('/edit-blood/:bloodId', isAuth, adminController.getEditBlood);
router.post('/edit-blood', isAuth, adminController.postEditBlood);
router.post('/delete-blood', isAuth, adminController.postDeleteBlood);
/*End Bloods Routes */

/*Start Bags Routes */
router.get('/add-bag', isAuth, adminController.getAddBag);
router.post('/add-bag', isAuth, adminController.postAddBag);
router.get('/display-bags', adminController.getBags);
router.get('/edit-bag/:bagId', isAuth, adminController.getEditBag);
router.post('/edit-bag', isAuth, adminController.postEditBag);
router.post('/delete-bag', isAuth, adminController.postDeleteBag);
/*End Bags Routes */


/*Account */
router.get('/view',isAuth,adminController.getAccountView);


module.exports = router;