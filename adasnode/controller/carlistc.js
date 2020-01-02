'use strict';
import AdminModel from '../models/carListc.js'
import chalk from 'chalk'; //高亮显示
var carList = async (req, res, next) => {
    var id = req.query.merchant_id;
    console.log(req.query.merchant_id)
    AdminModel.find({merchant_id:id}, (err, item) => {
        if (!err) {
            var data = item
            res.send(data)
        }
    })
    // res.send({
    //     data:[123]
    // })
    // await AdminModel.create(newAdmin)
    // req.session.admin_id = admin_id;
}
export default carList