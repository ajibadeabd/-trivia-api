require('express-async-errors')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/routes/user');
var usersRouter = require('./src/routes/quiz');

var app = express();

require('./src/middleware/initialMiddleware')(app);
const config = require('./src/config/constants');
const errorMiddleware = require('./src/middleware/errorHandler');
const apiRoutes = require('./src/routes/index');

//endPoint
app.use('/api/v1', apiRoutes);
// Error Middleware
errorMiddleware(app);

module.exports = app;

