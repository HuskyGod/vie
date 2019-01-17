const express  = require('express');
const app = express();
const whitList = ['http://192.168.5.31:3000']
app.use(function (req, res, next) {
    let origin = req.headers.origin;
    if (whitList.includes(origin)) {
        // 允许跨域
        res.setHeader('Access-Control-Allow-Origin', origin)
        // 允许前端设置请求头
        res.setHeader('Access-Control-Allow-Headers', 'name')
        // 允许前段发送put等请求（get，post）不需要配置
        res.setHeader('Access-Control-Allow-Methods', 'PUT')
        // 设置OPTIONS几秒发一次
        res.setHeader('Access-Control-Max-Age', 6000)
        // 允许前端获取响应头
        res.setHeader('Access-Control-Expose-Headers', 'name')
        // 允许带cookie
        res.setHeader('Access-Control-Allow-Credentials', true);
        if (req.method === 'OPTIONS') {
            res.end()
        }
    }
    next();
})

app.put('/getData', function (req, res) {
    res.setHeader('name', '111221')
    res.send('大佬早上好, put')
})

app.get('/getData', function (req, res) {
    res.send('大佬早上好')
})

app.listen(4000)