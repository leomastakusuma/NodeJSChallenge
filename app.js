var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var basicAuth = require('basic-auth-connect');
var mongoose	  = require('mongoose');
mongoose.connect('mongodb://localhost/NodeAPIChallenges');


app.use(bodyParser.urlencoded({ limit: '50mb',extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(methodOverride());

app.use(basicAuth('ommasta', 'dragonfm12'));

// set up express route control:
var erc = require('express-route-controller');
erc(app, {
    controllers: __dirname + '/controllers',
    routes: {
        '/profile'    : {action :'profilecontroller#saveProfiles', method :'post'},
        '/profileFind' : {action :'profilecontroller#FindProfiles', method :'get'},
        '/profileDelete/:id' : {action :'profilecontroller#deleteProfile', method :'get'},
        '/profileUpdate/:id' : {action :'profilecontroller#updateProfile', method :'post'},
        '/profileFindById/:id' : {action :'profilecontroller#FindSomeProfile', method :'get'}
    }
});
var port = process.env.PORT || 8080;
app.listen(port);
console.log('API Start On PORT  ' + 8080);
