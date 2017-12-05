const routes = require('express').Router();
const middleware = require('../middleware');

routes.get('/', (req, res) => {
    res.render('splash')
});

routes.get('/signup', (req, res) => {
    res.render('signup')
});

routes.post('/signup', (req, res) => {
    
});

routes.get('/login', (req, res) => {
    res.render('login')
});

routes.post('/login', (req, res) => {
    res.render('index')
});

module.exports = routes