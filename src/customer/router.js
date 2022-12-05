const express = require('express')
const router = express.Router()
const customerController = require("./controller")
router.route('/').post(customerController.addNew)
router.route('/').get(customerController.getAll)
router.route('/:id').get(customerController.getOne)
router.route('/:id').delete(customerController.delete)
router.route('/:id').put(customerController.update)

module.exports = router