var Player = require("./Player.js");

class PlayerController {
    constructor(maxPlayers) {
        this.maxPlayers = maxPlayers;
        this.players = {}
        this.playerCount = 0;
        this.availableIds = [];
    }

    addPlayer(socket) {
        this.playerCount++;

        var id;
        if (this.availableIds.length > 0) {
            id = this.availableIds.pop();
        } else {
            id = this.playerCount;
        }

        //this.players[id] = {
        //    x: 0,
        //    y: 0,
        //    isWalking: false,
        //    socket: socket.id
        //}

        this.players[id] = new Player(id, "player", 0, 0, socket)

        //console.log(this.players);
        //map[0][0] = id;

        return id;
    }

    removePlayer(id) {
        var p = this.getPlayerById(id);
        this.playerCount--;
        this.availableIds.push(id);
        p.movePlayer(-1, -1);
        delete this.players[id];
    }

    getPlayers() { return this.players }

    getPlayerById(id) { return this.players[id] }

    getPlayerBySocket(socket) { 
        console.log(Object.values(this.players).find(player => player.socket === socket));
        return Object.values(this.players).find(player => player.socket == socket);
    }
}

module.exports = PlayerController;