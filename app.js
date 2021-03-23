const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')

const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const errorsController = require('./controllers/errors')

app.use(bodyParser.urlencoded({ extended: false })) //will not parse JSON and other file types
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorsController.errorMessage)

app.listen(3000)
