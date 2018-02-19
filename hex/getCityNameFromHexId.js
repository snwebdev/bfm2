var getCityFromHexId = require('./getCityFromHexId');

module.exports = function(hexId, cities){
 var city = getCityFromHexId(hexId, cities);
 if (city === -1){
     return -1;
 } else {
     return city.name;
 }
}