const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
var logger = require('morgan');

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");

const passport = require('passport');
var indexRouter = require('../routes/index');
var path = require('path');

module.exports = function(app){
    app.use(cors());
    app.use(helmet());
    app.use(logger('dev'));
    // view engine setup
    app.set('views', path.join(__dirname, '../../views'));
    app.set('view engine', 'jade');

    app.use(express.json());
    app.use(express.urlencoded({extended:false}));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/api/v1', indexRouter);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.get('/api/v1',(req,res,next)=>{     res.redirect('/api-docs')  })
    
    require("../config/passport")(passport);
    app.use(passport.initialize());
}