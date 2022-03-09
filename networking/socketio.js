const { Server } = require("socket.io");
let socketio = null;

module.exports = {
    init: (server) => {
        socketio = new Server(server);
        return socketio;
    },
    getSocket: () => {
        if (!socketio) {
            return null;
        }

        return socketio;
    }

}