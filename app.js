var express = require('express');
var session = require('cookie-session'); // Loads the piece of middleware for sessions
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); // Loads the piece of middleware for managing the settings
var sassMiddleware = require('node-sass-middleware');

// Routes
var index = require('./routes/index');
// TodoApp routes
var todo = require('./routes/todoApp/todo');
var todoAdd = require('./routes/todoApp/todoAdd');
var todoDel = require('./routes/todoApp/todoDel');

// Socket.io app routes
var socketApp = require('./routes/socketApp/main_server');

// Real-time Chat app routes
var chatApp = require('./routes/chat/client');

var app = express();

/* Using sessions */
app.use(session({secret: 'mytodoappsecret'}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));

// Main index file
app.use('/', index);

// TodoApp
app.use('/', todo);
app.use('/', todoAdd);
app.use('/', todoDel);

// Socket.io App
app.use('/', socketApp);

// Real-time Chat App
app.use('/', chatApp);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
