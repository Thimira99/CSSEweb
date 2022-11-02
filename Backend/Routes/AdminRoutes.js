const express= require('express');

const router = express.Router();

const {addOrderDetails , getallAccountDetails} = require('../controller/OrderController');

router.post('/order/addOrderDetails',addOrderDetails);
router.get('/order/getallAccountDetails',getallAccountDetails);


module.exports = router;