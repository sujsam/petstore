var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
console.log('server starting...');
app.listen(8000);

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
console.log(__dirname);

mongoose.connect('mongodb+srv://meandbuser:mean1123@cluster0.vzrpn.mongodb.net/petshelter');
require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);