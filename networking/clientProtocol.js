var networkCommands = require("./networkCommands.js");
//const pController = require("./player/playerController.js").getPlayerController();

module.exports = {

    sendOtherClientMove(socket, id, direction) {
        networkCommands.sendToAllExceptSender(socket, "move other player", {id, direction});
    },

    sendMoveClient(socket, direction) {
        networkCommands.sendTo(socket, "move player", direction);
    },

    sendClientDoneMoving(socket, newX, newY) {
        networkCommands.sendTo(socket, "move player done", {newX, newY});
    },
    sendClientDisconnected(id) {
        networkCommands.broadcast("user disconnected", id);
    }
}