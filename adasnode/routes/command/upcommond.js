'use strict';

import express from 'express'
import upcom from '../../controller/commond/upcommond.js'
var router = express.Router()
router.get('/upcom', upcom);
// router.get('/', (req,res,next)=>{
//     res.send('heoooooo')
// });

export default router