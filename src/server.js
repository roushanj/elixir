const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = require('./app.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(process.env.PORT || 4000, function() {

	console.log('Server is running on port 4000');
});