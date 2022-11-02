const express= require('express');

const router = express.Router();

const {addOrderDetails , getallAccountDetails ,getOrderById , upDateOrderDetails} = require('../controller/OrderController');
const {getUserByrole} = require('../controller/userController')
const { createSupplier} = require('../controller/OrderSupplierController')

router.post('/order/addOrderDetails',addOrderDetails);
router.get('/order/getallAccountDetails',getallAccountDetails);
router.get('/order/getOrderById/:id',getOrderById);
router.put('/order/updateOrderById/:id',upDateOrderDetails);

router.post('/user/getUserByRole',getUserByrole);

router.post('/supplier/createSupplier',createSupplier);



module.exports = router;