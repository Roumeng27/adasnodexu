'use strict';

import express from 'express'
import carb from '../controller/carlistb'
var router = express.Router()
router.get('/carlistb', carb);
// router.get('/', (req,res,next)=>{
//     res.send('heoooooo')
// });

export default router