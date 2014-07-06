var _ = require('lodash');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var index = require('./routes/index');
var favicon = require('static-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.set('port', process.env.PORT || 3000);
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use('/css/bootstrap', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist')));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', index);

/// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
var state = {
    users: [],
    messages: {}
};

io.on('connection', function(socket){
    socket.on('sync:messages', function(messages) {
        console.log('sync messages', messages)
        _.each(messages, syncMessage);
        socket.emit('messages', messages);

        function syncMessage(message) {
            var id = message.id; 
            var messages = state.messages;

            if(messages[id]) {
                console.error('Message already synced');
            } else {
                messages[id] = message;
            }
        }
    })
});

/// error handlers

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

http.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});