const {Router} = require('express')
const router = Router()
const exphbs=require('express-handlebars');

var imageList = [{name: 'Antanas', file: 'a.jpg'}, {name: 'Malvydas', file: 'b.jpg'}, {name: 'Mažvydas', file: 'c.jpg'}, {name: 'Random', file: 'd.jpg'}, {name: 'Baron', file: 'e.jpg'}, {name: 'Begemotas', file: 'f.jpg'}, {name: 'Nesamoningas', file: 'g.jpg'}, {name: 'Testeris', file: 'h.jpg'}, {name: 'Krokodilas', file: 'j.jpg'}, {name: 'Banditas', file: 'k.jpg'}, {name: 'Drake', file: 'l.jpg'}, {name: 'Tomas', file: 'm.jpg'}, {name: 'Retardas', file: 'n.jpg'}, {name: 'Žaidėjas ', file: 'i.jpg'}]

router.get('/', (req, res) => {
    //res.send('Hello express node')
    res.render('home', {
        isHome: true
    })
})

router.get('/galery', (req, res) => {
    res.render('galery', {
        title: 'Image List',
        isGalery: true,
        imageList,
    })
})

router.get('/remove/:name', (req, res) => {
    const name = req.params.name

    imageList = imageList.filter(function(el) { return el.name != name; });

    //catList = filtered

    res.redirect('/galery')
})

module.exports = router