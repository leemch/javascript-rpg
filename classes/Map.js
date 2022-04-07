var Tile = require("./Tile");


class Map {
    constructor(name, height, width) {
        this.name = name;
        this.height = height;
        this.width = width;
        this.tiles = new Array(height).fill(0).map(row => new Array(width).fill(0));
        this.players = [];
        for(let x = 0; x < this.tiles.length; x++) {
            for(let y = 0; y < this.tiles[0].length; y++) {
                this.tiles[x][y] = new Tile();
            }
        }
        //console.log(this.tiles);
    }


    getTile(x, y) {
        if(x < this.height && x >= 0 && y < this.width && y >= 0) {
            return this.tiles[y][x];
        }

        return null;
    }

    moveObject(obj) {
        
    }

    addPlayer(playerObj) {
        this.players.push(playerObj);
        console.log(this.players);
    }

    removePlayer(id) {
        let playerIndex = this.players.findIndex(player => player.id == id);

        if(playerIndex != -1) {
            this.players.splice(playerIndex, 1);
        }
        console.log(this.players);
    }

    playerCanMove(x, y) {
        if(x < 0 || x > this.width - 1 || y < 0 || y > this.height - 1) {
            return false;
        }
        for(const player of this.players) {
            if(player.x == x && player.y == y) {
                return false;
            }
        }

        return true;
    }
}

module.exports = Map;