let PlayerController = require("../classes/playerController.js");

var pController = new PlayerController(5);

module.exports = {
    getPlayerController: () => {
        if (!pController) {
            return null;
        }

        return pController;
    }
}