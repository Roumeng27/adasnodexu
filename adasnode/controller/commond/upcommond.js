"use strict";
// import DianmingModel from "../models/dianming.js"
import chalk from "chalk"; //高亮显示
var dianming = async (req, res, next) => {
        var data = {
            msg:'指令下发成功',
            cid:12346578,
            code_status:200
        };
        res.send(data)
    // res.send({
    //     data:[123]
    // })
    // await AdminModel.create(newAdmin)
    // req.session.admin_id = admin_id;
}
export default dianming