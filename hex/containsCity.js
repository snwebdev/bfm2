module.exports = function(hexId, cities){

    var response = false;
    cities.forEach((city) => {
        if (city.hex === hexId) response = true
    })
    return response;
}