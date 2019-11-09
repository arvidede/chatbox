const app = require('express')()
const io = require('socket.io')()

const PORT = 8080
const SOCKET_PORT = 8081

app.listen(PORT, () => console.log('Listening on port', PORT))

io.listen(SOCKET_PORT)
console.log('Listening on port', SOCKET_PORT)

io.on('connection', socket => {

    console.log('Client connected', socket.id)

    socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id)
    })

    socket.on('sendMessage', msg => {
        socket.broadcast.emit('receivedMessage', msg)
    })

    socket.on('writing', status => {
        console.log('Writing')
    })

})
