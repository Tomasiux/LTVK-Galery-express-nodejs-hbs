const express = require('express')
const catRoutes = require('./routes/cats')
const galeryRoutes = require('./routes/galery')
const exphbs = require('express-handlebars')
const fs = require('fs')
const path = require('path')
const bootstrap = require('moment')

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.use(catRoutes)
app.use(galeryRoutes)
app.use('/', express.static(path.join(__dirname, 'uploads')))

app.get('/galery', (req, res) => {
    let images = getImagesFromDir(path.join(__dirname, 'uploads'));
     res.render('galery', {images: images })
});

app.listen(3000, () => {
    console.log('Server is running')
})