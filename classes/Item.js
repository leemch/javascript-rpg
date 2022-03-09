class Item {
    constructor(name, sprite_id) {
        this.sprite_id = sprite_id;
        this.name = name;
        this.stackable = false;
    }

    onUse(player) {

    }

    onPickUp(player) {

    }

    onMove() {
        
    }
}

module.exports = Item;