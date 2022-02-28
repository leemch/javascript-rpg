var Entity = require("./Entity.js");


class Npc extends Entity {
    constructor(id, name, x, y) {
        super(id,name, x, y);
        this.canBlock = true;
        this.speed = 4;
    }
}

module.exports = Npc;