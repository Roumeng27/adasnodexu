'use strict';

import express from 'express'
import login from '../controller/admin.js'
var router = express.Router()
router.post('/login', login);
// router.get('/', (req,res,next)=>{
//     res.send('heoooooo')
// });

export default router