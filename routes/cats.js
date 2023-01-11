const {Router} = require('express')
const router = Router()

var catList = [{name: 'Baltas'}, {name: 'Suskis'}, {name: 'Pienius'}]

router.get('/', (req, res) => {
    //res.send('Hello express node')
    res.render('home', {
        isHome: true
    })
})

router.get('/cats', (req, res) => {
    res.render('cats', {
        title: 'Cat List',
        isCats: true,
        catList
    })
})

router.get('/remove/:name', (req, res) => {
    const name = req.params.name

    catList = catList.filter(function(el) { return el.name != name; });

    //catList = filtered

    res.redirect('/cats')
})

module.exports = router