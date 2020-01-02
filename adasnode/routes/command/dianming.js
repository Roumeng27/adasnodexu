'use strict';

import express from 'express'
import dianming from '../../controller/commond/dianming.js'
var router = express.Router()
router.get('/get_information_insert_result', dianming);
// router.get('/', (req,res,next)=>{
//     res.send('heoooooo')
// });

export default router