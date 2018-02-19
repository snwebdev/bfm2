const getHexIdOfNeighbourUp = require('./hex/getHexIdOfNeighbourUp');
const getHexIdOfNeighbourUpRight = require('./hex/getHexIdOfNeighbourUpRight');
const getHexIdOfNeighbourDownRight = require('./hex/getHexIdOfNeighbourDownRight');
const getHexIdOfNeighbourDown = require('./hex/getHexIdOfNeighbourDown');
const getHexIdOfNeighbourDownLeft = require('./hex/getHexIdOfNeighbourDownLeft');
const getHexIdOfNeighbourUpLeft = require('./hex/getHexIdOfNeighbourUpLeft');
var cities = require('./setup/cities');
var containsCity = require('./hex/containsCity');
var getCityNameFromHexId = require('./hex/getCityNameFromHexId');
var defensiveZones = require('./setup/defensiveZones');
var isDefensiveZone = require('./hex/isDefensiveZone');
var forests = require('./setup/forests');
var isForest = require('./hex/isForest');
var rivers = require('./setup/rivers');
var riverBetween = require('./hex/riverBetween');
var russianUnits = require('./setup/russianUnits');

console.log("bfm2");

console.log(russianUnits);

