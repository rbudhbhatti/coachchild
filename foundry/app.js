var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require("fs");

var routes = require('./routes/index');

var app = express();

// declare breakline generator
app.locals.br = function (numTimes) {
    var result = ""
    for (var i=0; i<numTimes; i++) {
        result += "<br/>";
    }
    return result;
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// parse post file names in format YYYYMMDD-name.ejs
var parsePosts = function (files) {
    var result = {};
    for (var i=0; i<files.length; i++) {
        result[files[i]] = {
            date : files[i].substring(0,8), // assume index 8 is separator character
            postid : files[i].substring(9,files[i].indexOf(".ejs"))
        };
    }
    return result;
};

// make array of posts in view/partials/content/posts directory global
fs.readdir("views/partials/content/posts", function (err, files) {
    if (err) console.log(err);
    files.sort().reverse(); // most recent posts first
    app.locals.filesdata = parsePosts(files);
    console.log(app.locals.filesdata);
})

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
