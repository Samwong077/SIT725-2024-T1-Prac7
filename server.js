var express = require("express")
var app = express()
require('./dbConnections');
var port = process.env.port || 3000;
let router = require('./routers/router');

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/dogs', router);

let http = require('http').createServer(app);
let io = require('socket.io')(http);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);
});
http.listen(port, () => {
    console.log("express server started");
});
io.on('connection', (socket) => {
    console.log('something');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
});

