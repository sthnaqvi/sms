/**
 * Created by Tauseef Naqvi on 07-06-2017.
 */
// BASE SETUP
// =============================================================================
// import the packages we need
const express = require('express');                   //import express module
const bodyParser = require('body-parser');            //import bodyparser
const mongoose = require('mongoose');                 //import mongoose
const app = express();                                //import express contractor
const request = require('request');                   //import request for http requests
const cors = require('cors');                         //import cors for cross domain request
const moment = require('moment');                     //import moment for Parse, validate, manipulate, and display dates
const config = require('./config');                   //import config
const path = require('path');

// configure cors
app.use(cors());

// configure body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/*//Mongoose Setup
// =============================================================================
// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected',() =>{
    console.log('Connected to database at '+config.database);
});

// On Error
mongoose.connection.on('error',(err) =>{
    console.log('Database error: '+err);
});

//create db for mongoDB native operations
const db = mongoose.connection.db;*/



// ROUTES FOR OUR API
// =============================================================================
// create our router
const router = express.Router();
app.use(express.static(path.join(__dirname, 'src')));



// import our routers
// ----------------------------------------------------
// router.use('/sms',require('./modules/sms/router'));


// register our routers
// -------------------------------
app.use('/api', router);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src'));
});

// START THE SERVER
// =============================================================================
app.listen(config.port, function (err) {
    if (err)
        console.log(err);
    console.log('Server running at  ' + config.port);
});
