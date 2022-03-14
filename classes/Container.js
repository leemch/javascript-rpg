const Item = require("./Item");

class Container extends Item {
    constructor(name, sprite_id, maxSlots) {
        super(name, sprite_id);
        this.maxSlots = maxSlots;
        this.items = [];
    }

    onUse(player) {

    }

    onPickUp(player) {

    }

    onMove() {
        
    }
}

module.exports = Container;