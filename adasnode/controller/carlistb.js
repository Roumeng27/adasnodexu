'use strict';
import AdminModel from '../models/carListb.js'
import chalk from 'chalk'; //高亮显示
var carList = async (req, res, next) => {
    AdminModel.find({}, (err, item) => {
        if (!err) {
            var data = item[0]
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