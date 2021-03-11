const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('in the middleware!')
    next() // allows request to ocntinue to next middleware
})

app.use((req, res, next) => {
    console.log('in ANOTHER middleware!')
    res.send('<h1>Hello my friend</h1>') // ends request, does not advance like with next()
})

app.listen(3000)
