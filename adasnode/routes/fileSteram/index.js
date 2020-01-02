'use strict';

import express from 'express'
import path from 'path';
import fs from 'fs'
import mineType from 'mime-types'
// import upcom from '../../controller/commond/upcommond.js'
var router = express.Router()
// router.get('/upcom', upcom);
router.get('/fileStr', (req, res, next) => {

    // res.send('heoooooo')path.join(__dirname, "./test.html")
    // let data = fs.readFileSync('./static/b.pdf');
    // data = new Buffer(data).toString('base64');
    // let base64 = 'data:' + mineType.lookup('./static/b.pdf') + ';base64,' + data;
    // res.send({
    //     msg:'成功',
    //     url:base64
    // })
    //有效代码
    res.set({
        "Content-type": "application/octet-stream",
        "Content-Disposition": "attachment;filename=test_2.pdf"
    });
    fs.readFile("./static/b.pdf", function (err, data) {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })
    //有效代码结束
    //下面的是读取文件的另一种方式
    let readStream = fs.createReadStream('./static/b.pdf', { encoding: 'utf8' });
    var fileData = '';
    //读取文件发生错误事件
    readStream.on('error', (err) => {
        console.log('发生异常:', err);
    });
    //已打开要读取的文件事件
    readStream.on('open', (fd) => {
        console.log('文件已打开:');
    });
    //文件已经就位，可用于读取事件
    readStream.on('ready', () => {
        console.log('文件已准备好..');
    });
    //文件读取中事件·····
    readStream.on('data', (chunk) => {
        console.log('读取文件数据:');

        fileData += chunk;
    });
    //文件读取完成事件
    readStream.on('end', (data) => {
        console.log('读取已完成..');
        // res.send(fileData)
    });

    //文件已关闭事件
    readStream.on('close', () => {
        console.log('文件已关闭！');
    });
});

export default router