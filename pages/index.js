const { Router } = require('express'),
    route = Router();

route.get('/', (req, res) => {
    res.render('index');
});

module.exports = route;