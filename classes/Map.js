import Tile from "./Tile";


class Map {
    constructor(name, height, width) {
        this.name = name;
        this.height = height;
        this.width = width;
        this.tiles = new Array(height).fill(0).map(row => new Array(width).fill(0));
        for(let x = 0; x < this.tiles.length; x++) {
            for(let y = 0; y < this.tiles[0].length; y++) {
                this.tiles[x][y] = new Tile();
            }
        }
        console.log(this.tiles);
    }


    getTile(x, y) {
        if(x < this.height && x >= 0 && y < this.width && y >= 0) {
            return this.tiles[y][x];
        }

        return null;
    }
}

module.exports = Map;