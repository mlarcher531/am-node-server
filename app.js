const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false})) //will not parse JSON and other file types

app.use('/', (req, res, next) => {
    // console.log('this always runs')
    next()
})

app.use('/sign-up', (req, res, next) => {
    // console.log('in sign-up!')
    res.send('<form action="/new-user" method="POST" ><input type="text" name="username"><button type="submit">Sign Up</button></form>') // ends request, does not advance like with next()
})

app.use('/new-user',(req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    // console.log('in home / !')
    res.send('<h1>Hello my friend</h1>') // ends request, does not advance like with next()
})

app.listen(3000)
