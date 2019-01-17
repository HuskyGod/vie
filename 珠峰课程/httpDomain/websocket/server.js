let express = require('express');
let app = express();
let WebSocket = require('ws');
let wss = new WebSocket.Server({port: 3000})
wss.on('connection', function (ws) {
    console.log('我链接了')
    ws.on('message', function (data) {
        console.log(data)
    })
})