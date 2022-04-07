var Player = require("./Player.js");
const mapController = require("../maps/mapControlObject.js").getMapController();

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

        this.players[id] = new Player(id, "player", 0, 0, 0, socket)
        mapController.getMap(0).addPlayer(this.players[id]);

        //console.log(mapController.getMap(0).getTile(0, 0));
        //map[0][0] = id;

        return id;
    }

    removePlayer(id) {
        mapController.getMap(0).removePlayer(id);
        //var p = this.getPlayerById(id);
        this.playerCount--;
        this.availableIds.push(id);
        //p.movePlayer(-1, -1);
        delete this.players[id];
    }

    getPlayers() { return this.players }

    getPlayerById(id) { return this.players[id] }

    getPlayerBySocket(socket) { 
        console.log(Object.values(this.players).find(player => player.socket === socket));
        return Object.values(this.players).find(player => player.socket == socket);
    }

    movePlayer(id, x, y) {
        if(mapController.getMap(0).playerCanMove(x, y)) {
            let p = this.getPlayerById(id);
            p.moveTo(x, y);
            console.log(p);
        } else {
            console.log("cant move there");
        }
    }
}

module.exports = PlayerController;