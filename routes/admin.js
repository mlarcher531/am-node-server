const express = require('express')

const router = express.Router()

router.get('/add-product', (req, res, next) => {
    // console.log('in sign-up!')
    res.send('<form action="/product" method="POST" ><input type="text" name="title"><button type="submit">Add Item</button></form>') // ends request, does not advance like with next()
})

router.post('/product',(req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router