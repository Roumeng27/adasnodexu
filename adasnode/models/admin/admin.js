'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	userName: String,
	password: String,
	status: Number,  //1:普通管理、 2:超级管理员
})

adminSchema.index({id: 1});
// 第一个参数是schema名字，第二个参数是schema，第三个参数是映射到数据库的clection
const Admin = mongoose.model('xiaoming', adminSchema,'ttt');


export default Admin