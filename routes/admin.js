const path = require('path')
const express = require('express')

const router = express.Router()

const adminController = require('../controllers/admin')

const products = []

// 'admin/add-product' => GET
router.get('/add-product', adminController.getAddProduct)

// 'admin/add-product' => POST
router.post('/add-product', adminController.postAddProduct)

router.get('/admin-product-list', adminController.getProducts)


module.exports = router