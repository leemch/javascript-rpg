var Map = require("./Map");


class MapController {
    constructor() {

        this.maps = {};
        this.count = 0;
        //for(let x = 0; x < this.tiles.length; x++) {
        //    for(let y = 0; y < this.tiles[0].length; y++) {
        //        this.tiles[x][y] = new Tile();
        //    }
        //}
    }

    addMap(name) {
        this.maps[this.count] = new Map(name, 10, 10);
        this.count++;
        //console.log(this.maps);
    }

    getMap(id) {
        if(this.maps[id] != null) {
            return this.maps[id];
        }
        return null;
    }
}

module.exports = MapController;