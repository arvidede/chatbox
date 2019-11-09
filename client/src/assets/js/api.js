import openSocket from 'socket.io-client'

export default class Socket {
    constructor(cb) {
        this.connection = openSocket('http://localhost:8081')
        this.subscribeToMessages(cb)
    }

    subscribeToMessages(cb) {
        this.connection.on('receivedMessage', msg => cb(msg))
    }

    sendMessage(message) {
        this.connection.emit('sendMessage', message)
    }
}
