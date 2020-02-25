import debug = require('debug');
import express = require('express');
import path = require('path');
import url = require('url');
import routes from './routes/index';
import { create } from 'domain';
//import users from './routes/user';
import feeds from './routes/feed';
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;
const Feed = require('./models/feed.js');
const db = mongoose.connection;

var cors = require('cors');
var app = express();

app.use('*', cors());


mongoose.connect(mongoURI,
    () => console.log('Mongo running at', mongoURI)
);

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

var app = express();
routes.bind(url);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
//app.use('/users', users);
app.use('/feeds', feeds);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err: any, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err: any, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});