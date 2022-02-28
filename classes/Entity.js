class Entity {
    constructor(id, name, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.name = name;
        this.vel_x = 0;
        this.vel_y = 0;
        this.direction = "down";
        this.moving = false;
        this.speed = 0;
        this.canBlock = false;
    }

    move(x, y) {

    }

    tick() {

    }

    onStartMoving() {

    }

    onStopMoving() {

    }

    onMoving() {

    }
}
module.exports = Entity;