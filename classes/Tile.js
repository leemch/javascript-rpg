class Tile {
    constructor() {
        this.data = [];
    }

    getData() {
        return this.data;
    }

    getTopObject() {
        const tileData = this.getData();
        if(tileData.length > 0) {
            return tileData[0];
        }

        return null;
    }

    addObject(obj) {
        const tileData = this.getData();

        tileData.push(obj);
    }

    removeFromTop() {
        const tileData = this.getData();
        if(tileData.length > 0) {
            return tileData.pop();
        }

        return null;
    }
}

module.exports = Tile;