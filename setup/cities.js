var fs = require('fs');


var cities = [];
try {
    citiesFileText = fs.readFileSync('./setup/cities.txt', 'utf8');
    // var citiesText = citiesFileText.split('\n');
    //console.log(citiesText);
    citiesFileText.split('\n').forEach((cityText) => {
        var cityArray = cityText.split(' ');
        var city = {
            name: cityArray[0],
            hexId: cityArray[1]
        }
        cities.push(city)
    });
} catch (e) {
    console.log(e.stack);
}

module.exports = cities;




