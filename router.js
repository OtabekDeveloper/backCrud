const express = require('express');
const router = express.Router();
const orderRouter = require("./src/order/router")
const userRouter = require("./src/user/router")



router.use('/user', userRouter);
router.use('/order', orderRouter);


module.exports = router;