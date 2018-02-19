var fs = require('fs');


var forests = [];

try {
    var forestsText = fs.readFileSync('./setup/forests.txt', 'utf8');

    forestsText.split('\n').forEach((forestText) => {
        if (forestText !== "") {
            forests.push(forestText)
        }
    });
} catch (e) {
    console.log(e.stack);
}

module.exports = forests;
