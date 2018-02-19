var fs = require('fs');


var defensiveZones = [];

try {
    var defensiveZonesText = fs.readFileSync('./setup/defensiveZones.txt', 'utf8');

    defensiveZonesText.split('\n').forEach((defensiveZoneText) => {
        if (defensiveZoneText !== "") {
            defensiveZones.push(defensiveZoneText)
        }
    });
} catch (e) {
    console.log(e.stack);
}

module.exports = defensiveZones;
