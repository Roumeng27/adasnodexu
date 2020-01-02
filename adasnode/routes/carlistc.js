'use strict';

import express from 'express'
import carc from '../controller/carlistc'
var router = express.Router()
router.get('/carlistc', carc);
// router.get('/', (req,res,next)=>{
//     res.send('heoooooo')
// });

export default router