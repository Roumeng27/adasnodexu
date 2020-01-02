'use strict';
var fs = require('fs');
import express from 'express'
import login from '../controller/admin.js'
var router = express.Router()
// router.get('/file', file);
router.get('/file', (req,res,next)=>{

    // res.sendFile('/nodeserver/adasnode/public/images/rebab.jpeg')
    var readStream = fs.createReadStream('/nodeserver/adasnode/public/images/rebab.jpeg',{start:3,end:12});
    fs.readFile('/nodeserver/adasnode/public/images/rebab.jpeg', 'utf8', function(err, data){
        res.send(data);  
    });
});

export default router