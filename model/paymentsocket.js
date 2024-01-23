const { Server } = require('socket.io')
    
    class SocketServer {
      init(server) {
        const io = new Server(server,
          {
            transports: ['websocket'],
            cors: {
              origin: 'http://localhost:3000',
              methods: ['GET', 'POST'],
          },});
    
        io.on('connection', (socket) => {
            console.log(`user online => ${socket.id}`)
            socket.on("payloadGen", (data) => console.log(data))
            socket.on("disconnect", () => {"user offline"})
        });

        io.on('disconnection', () => {
          console.log(`user offline`)
        })

        this.socket = io
      }
    
      onPaymentApproved(message) {
        console.log(message)
        this.socket.emit('payed', message);
      }
    }
    
    module.exports = new SocketServer