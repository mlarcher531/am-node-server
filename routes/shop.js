const path = require('path')
const express = require('express')

const router = express.Router()

const rootDirectory = require('../utility/path')

const adminData = require('./admin')


router.get('/', (req, res, next) => {
    const products = adminData.products
    res.render('shop', {
        prods: products,
        docTitle: 'My Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    })
})

module.exports = router