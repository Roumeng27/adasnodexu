'use strict';

import express from 'express'
import car from '../controller/carlist'
var router = express.Router()
router.get('/carlist', car);
// router.get('/', (req,res,next)=>{
//     res.send('heoooooo')
// });

export default router