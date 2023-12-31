const fs = require('fs');
const funkoJson = fs.readFileSync(__dirname + '../../../data/db.js', 'utf8');
const funkos = JSON.parse(funkoJson);
const mainControllers = {
    home: (req, res) => {
        const user = req.session.userLogged;
        const sliderTitle = 'ULTIMAS NOVEDADES';
        res.render('index', {funkos: funkos, user: user, sliderTitle: sliderTitle});
    },
    contact: (req, res) => {
        user = req.session.userLogged;
        res.render('shop/contact', {user: user} );
    },
    about: (req, res) => {
        res.send('Route for About View');
    },
    faqs: (req, res) => {
        res.send('Route for Faqs View');
    }
}

module.exports = mainControllers;
