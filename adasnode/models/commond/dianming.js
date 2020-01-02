import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	merchantId: String,
	deviceId: String,
	plate_number: String,
    send_time: String,  //1:普通管理、 2:超级管理员
    send_status: String,
    message: String,
    username: String,
    lon: Number,
    lat: Number,
    speed: String
})
const Dianming = mongoose.model('dianming', adminSchema,'dianming');

export default Dianming