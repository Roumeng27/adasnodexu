'use strict';
import AdminModel from '../models/admin/admin'
import chalk from 'chalk'; //高亮显示
var login = async (req, res, next) => {
    console.log(req.body)
    const { userName,password,status = 1 } = req.body;
    try {
        console.log(userName)
        const newAdmin = {
            userName,
            password,
            status
        }
        const admin = await AdminModel.findOne({userName},(err,item)=>{
            if(!err){
                console.log(item)
            }
        })
        if (admin) {
            console.log('该用户已经存在');
            res.send({
                status: 800,
                type: 'USER_HAS_EXIST',
                message: '该用户已经存在',
            })
        } else {
            AdminModel.create(newAdmin,(err, admin)=>{
                if(!err){
                    res.send({
                        status: 900,
                        message: '注册成功'
                    })
                }
            })
            
        }
    } catch (err) {
    }
    // await AdminModel.create(newAdmin)
    // req.session.admin_id = admin_id;
}
export default login