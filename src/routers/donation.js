const express = require('express')
const donationController = require('../controllers/donationController')
const auth = require('../middleware/auth')
const checkRole = require('../middleware/role')

const router = express.Router()

router.post('/donate',auth,checkRole("User","admin"),donationController.addNewDonataion)
router.get('/donate', auth,checkRole("admin"),donationController.getAllElement)
router.get('/donate/:id', auth,checkRole("User","admin"),donationController.getElmenetById)
router.put('/donate/:id', auth,checkRole("admin"),donationController.updateById)
router.delete('/donate/:id',auth ,checkRole("admin"),donationController.deletById)

module.exports = router
