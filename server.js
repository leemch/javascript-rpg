const express = require("express");
const path = require("path");
const http = require("http");


const rpg_server = express();
const http_server = http.createServer(rpg_server);
const socketio = require("./networking/socketio.js").init(http_server);


//classes
const Player = require("./classes/Player.js");
const playerController = require("./player/pControlObject.js").getPlayerController();
//const playerController = require("./player/pControlObject.js").getPlayerController();

var map = require("./maps/map.js");


rpg_server.use(express.static(path.resolve(__dirname, "../dist")))

rpg_server.get("/", (req, res) => {
    res.sendFile("index.html");
});

//socketio network event handlers
const registerPlayerHandler = require("./networking/playerEventHandlers.js");

const onConnection = (socket) => {
    //socketio.in(socket.id).fetchSockets().then(socket => console.log(socket));
    //console.log(socketio.sockets.sockets);
    socket.emit("send characters", playerController.players);

    var id = playerController.addPlayer(socket.id);

    map[0][0] = id;

    socket.broadcast.emit("user joined", {id, userData: playerController.players[id]});

    registerPlayerHandler(socketio, socket, playerController.players[id]);
}

socketio.on("connection", onConnection);



http_server.listen(3000, () => {
    console.log("Server is up.");
});