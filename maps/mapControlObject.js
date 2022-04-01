let MapController = require("../classes/MapController.js");

var mapController = new MapController();
mapController.addMap("map1");
mapController.addMap("map2");

module.exports = {
    getMapController: () => {
        if (!mapController) {
            return null;
        }

        return mapController;
    }
}