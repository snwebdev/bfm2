var fs = require('fs');


var russianUnits = [];

try {
    var russianUnitsText = fs.readFileSync('./setup/russianUnits.txt', 'utf8');

    russianUnitsText.split('\n').forEach((line) => {
        if (line !== "") {
            russianUnits.push(russianUnitsText)
        }
    });
} catch (e) {
    console.log(e.stack);
}

module.exports = russianUnits;