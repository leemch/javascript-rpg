var express = require("express");
var path = require("path");
var http = require("http");

var { Server } = require("socket.io");

var rpg_server = express();
var http_server = http.createServer(rpg_server);
var socketio = new Server(http_server);

var Player = require("./classes/Player.js");

var map = new Array(10).fill(0).map(row => new Array(10).fill(0));


//console.log(map);
var players = {};
var playerCount = 0;
var availableIds = [];



rpg_server.use(express.static(path.resolve(__dirname, "../dist")))

rpg_server.get("/", (req, res) => {
    res.sendFile("index.html");
});

socketio.on("connection", (socket) => {


    //console.log(socket.handshake.query.username);
    //var username = socket.handshake.query.username != "null" ? socket.handshake.query.username : "User";

    //socket.broadcast.emit("user joined", "User");
    socket.emit("send characters", players);
    playerCount++;

    var id;
    if(availableIds.length > 0) {
        id = availableIds.pop();
    } else {
        id = playerCount;
    }
    
    players[id] = {
        x: 0,
        y: 0,
        isWalking: false,
        socket: socket.id
    }

    console.log(players);

    map[0][0] = id;

    //socketio.emit("send map", map);



    socket.broadcast.emit("user joined", id, players[id]);

    socket.on("move", (direction) => {

        switch (direction) {
            case "up":
                console.log(direction);
                movePlayer(id, players[id].x, players[id].y - 1, direction, socket);
                break;

            case "down":
                movePlayer(id, players[id].x, players[id].y + 1, direction, socket);
                break;

            case "left":
                movePlayer(id, players[id].x - 1, players[id].y, direction, socket);
                break;

            case "right":
                movePlayer(id, players[id].x + 1, players[id].y, direction, socket);
                break;
        }



    })

    socket.on("chat message", (msg) => {
        socketio.emit("chat message", msg);
        console.log(msg);
    })

    socket.on("disconnect", () => {
        playerCount--;
        availableIds.push(id);
        movePlayer(id, -1, -1)
        socketio.emit("user disconnected", id)
        delete players[id];
        console.log("user disconnected");
        console.log(players);
    })
});

function movePlayer(id, newX, newY, direction, socket) {
    let p = players[id];
    if (!p.isWalking) {
        console.log(p.isWalking);
        if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10 && map[newY][newX] == 0) {
            map[p.y][p.x] = 0;
            map[newY][newX] = id;
            p.x = newX;
            p.y = newY;

            socket.broadcast.emit("move other player", id, direction);
            socket.emit("move player", direction);
            console.log(map);
            console.log("Player " + id + " moved to " + newX + "," + newY);
            p.isWalking = true;
            setTimeout(() => {
                if (p) {
                    p.isWalking = false;
                    socket.emit("move player done", newX, newY);
                }

            }, 1000);
        } else if (newX == -1 && newY == -1) {
            map[p.y][p.x] = 0;
            //socketio.emit("send map", map);
            //console.log(map);
        }
    }

}

http_server.listen(3000, () => {
    console.log("Server is up.");
});