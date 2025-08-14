const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const config = require('./config/config');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, config.socket);

app.use(cors(config.cors));
app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({
        message: 'status: active',
        environment: process.env.NODE_ENV || 'development',
        host: config.server.host,
        port: config.server.port
    });
});

io.on('connection', (socket) => {
    console.log('Client connesso: ', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnesso: ', socket.id);
    });
});

server.listen(config.server.port, config.server.host, () => {
    console.log(`Server running on ${config.server.host}:${config.server.port}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

