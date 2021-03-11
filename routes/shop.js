const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    // console.log('in home / !')
    res.send('<h1>Hello my friend</h1>') // ends request, does not advance like with next()
})

module.exports = router