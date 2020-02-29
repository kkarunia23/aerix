"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const path = require("path");
const url = require("url");
const index_1 = require("./routes/index");
//import users from './routes/user';
const feed_1 = require("./routes/feed");
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();
let app = express();
app.use(cors());
const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI);
const db = mongoose.connection;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open', () => { });
index_1.default.bind(url);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/weather', index_1.default);
//app.use('/users', users);
app.use(express.json()); // returns middleware that only parses JSON
app.use('/feeds', feed_1.default);
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
    app.use((err, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
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
//# sourceMappingURL=app.js.map