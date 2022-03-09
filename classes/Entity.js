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
        this.mapId = 0;
    }

    moveTo(x, y) {
        if (x >= 0 && x < 10 && y >= 0 && y < 10 && map[y][x] == 0) {
            map[p.y][p.x] = 0;
            map[y][x] = id;
            p.x = x;
            p.y = y;

            //socket.broadcast.emit("move other player", id, direction);
            //socket.emit("move player", direction);
            //console.log(map);
            //console.log("Player " + id + " moved to " + x + "," + y);
            p.isWalking = true;
            setTimeout(() => {
                if (p) {
                    p.isWalking = false;
                    socket.emit("move player done", x, y);
                }
            }, 1000);
        } else if (x == -1 && y == -1) {
            map[p.y][p.x] = 0;
            //socketio.emit("send map", map);
            //console.log(map);
        }
    }

    tick() {

    }

    onStartMoving() {

    }

    onStopMoving() {

    }

    onMoving() {

    }

    onMove() {

    }

    onHit() {

    }

    onUse() {

    }

    onAttack() {

    }

    onTouch(touchedObj) {

    }

    onClick() {
        
    }
}
module.exports = Entity;