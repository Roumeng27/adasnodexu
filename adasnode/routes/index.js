// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
'use strict';
// import express from 'express'
import admin from './admin'
import file from './filesteam'
import carlist from './carlist'
import carlistb from './carlistb'
import carlistc from './carlistc'
import dianming from './command/dianming'
import upcom from './command/upcommond'
import filestr from './fileSteram/index'
// var app = express();
export default app => {
    // app.get('/', (req, res, next) => {
    // 	res.redirect('/');
    // });
    app.use('/admin', admin);
    app.use('/admin', file);
    app.use('/admin', dianming);
    app.use('/admin', upcom);
    app.use('/car', carlist);
    app.use('/car', carlistb);
    app.use('/car', carlistc);
    app.use('/filelist', filestr);
    // app.use('/admin', (req, res, next) => {
    //   res.send('hello');
    // });
}