const express = require('express');
const router = express.Router();
const orderRouter = require("./src/order/router")
const userRouter = require("./src/user/router")
const categoryRouter = require("./src/category/router")


router.use('/user', userRouter);
router.use('/order', orderRouter);
router.use('/category', categoryRouter);

module.exports = router;