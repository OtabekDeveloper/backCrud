const express = require('express')
const router = express.Router()
const categoryController = require("./controller")


router.route('/').post(categoryController.addNew)

router.route('/').get(categoryController.getAll)

router.route('/:id').get(categoryController.getOne)

router.route('/:id').delete(categoryController.delete)

router.route('/:id').put(categoryController.update)

module.exports = router