const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController');
const adminAuth = require('../middlewares/adminAuth.js');
router.get('/', adminAuth,  adminControllers.home);
router.get('/create', adminControllers.create);
router.post('/create', adminControllers.store);
router.post('/item/:id/add', adminControllers.addCart);
router.get('/edit/:id', adminControllers.getEdit);
router.post('/edit/:id',adminControllers.postEdit);
router.delete('/delete/:id', adminControllers.delete);
module.exports = router;
