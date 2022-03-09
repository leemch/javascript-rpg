const pController = require("../player/pControlObject.js").getPlayerController();
var ClientProtocol = require("./clientProtocol");


module.exports = (socketio, socket, player) => {
    const initializePlayer = () => {

    }

    var p = player;
    //console.log(p);

    socket.on("chat message", (msg) => {
        socketio.emit("chat message", msg);
        console.log(msg);
    })

    socket.on("disconnect", () => {
        ClientProtocol.sendClientDisconnected(p.id);
        pController.removePlayer(p.id);

        console.log("user disconnected");
        console.log(pController.players);
    })

    socket.on("move", (direction) => {
        switch (direction) {
            case "up":
                console.log(direction);
                p.movePlayer(socket, p.x, p.y - 1, direction);
                break;

            case "down":
                p.movePlayer(socket, p.x, p.y + 1, direction);
                break;

            case "left":
                p.movePlayer(socket, p.x - 1, p.y, direction);
                break;

            case "right":
                p.movePlayer(socket, p.x + 1, p.y, direction);
                break;
        }
    });
}