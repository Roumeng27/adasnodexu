"use strict";
import DianmingModel from "../../models/commond/dianming.js"
import chalk from "chalk"; //高亮显示
var dianming = async (req, res, next) => {
    DianmingModel.find({}, (err, item) => {
        if (!err) {
            
            var data = {
                data:item,
                ret:0
            };
            res.send(data)
        }
    })
    // res.send({
    //     data:[123]
    // })
    // await AdminModel.create(newAdmin)
    // req.session.admin_id = admin_id;
}
export default dianming