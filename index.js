require('dotenv').config()
const cors = require('cors')
const express = require('express')
const http = require('http');
//const { Server } = require('socket.io');
const app = express()
const SocketServer = require("./model/paymentsocket");
app.use(cors())

const server = http.createServer(app);

// const io = new Server(server, {transports: ['websocket'],
// cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST'],
// },});

// io.on("connection", (socket) => {
    
//     socket.on("payloadGen", (data) => {
//         console.log(data.rm)
//     })
    
// })



const connection = require('./inc/connection')
const tables = require('./inc/tables')

const router = require('./routes/index')

router(app, express)
tables.init(connection)


server.listen(process.env.PORT || 3001, (error) => {
    if(error){
        console.log('deu erro -> ', error.message)
    }else{
        console.log(`rodando na porta ${process.env.PORT || 3001}`)
    }
})

SocketServer.init(server)
