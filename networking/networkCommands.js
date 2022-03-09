const socketio = require("./socketio.js").getSocket();

module.exports = {
    broadcast: (type, msg) => { socketio.emit(type, msg); },
    sendToAllExceptSender: (socket, type, msg) => { socket.broadcast.emit(type, msg) ; },
    sendTo: (socket, type, msg) => { socket.emit(type, msg) ; }
}