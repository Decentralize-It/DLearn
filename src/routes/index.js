const routes = require('express').Router()
const authRoutes = require('./authentication');

routes.use('/', authRoutes)

module.exports = routes