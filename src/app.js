const express = require('express');
const path = require('path');

const app = express();

const main = require('./routes/main');
const api = require('./routes/index');

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, ('public'))));


app.use('/',main);
app.use('/api',api);

module.exports = app;