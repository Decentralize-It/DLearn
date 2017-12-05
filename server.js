const express = require('express')
const path = require('path')
const app = express();
const routes = require('./src/routes')
const port = (process.env.PORT || 3000);
// const middleware = require('./src/middleware')
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/public/views');
app.use('/', express.static(path.join(__dirname, '/src/public/views')))
app.use('/', routes)


app.listen(port, () => console.log(`DLearn - Decentralized Learning | Application LIVE on localhost:${port}`))