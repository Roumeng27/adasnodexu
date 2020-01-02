import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	item_total: Number,
	id: String,
	page_size: Number,
	ret: Number,  //1:普通管理、 2:超级管理员
	data: {type: Array},
})
const Carlist = mongoose.model('carlistc', adminSchema,'carlistc');

export default Carlist