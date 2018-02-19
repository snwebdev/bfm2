module.exports = function (hexId, cities) {
    for (var i = 0; i < cities.length; i++) {
        var city = cities[i];
        if (city.hexId === hexId) return city;
    }
    return -1;
}