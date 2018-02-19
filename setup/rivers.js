var fs = require('fs');


var rivers = [];
try {
    riversFileText = fs.readFileSync('./setup/rivers.txt', 'utf8');

    riversFileText.split('\n').forEach((riverText) => {
        if(riverText !== ""){
            var riverArray = riverText.split(' ');
            var river = {
                hexId1: riverArray[0],
                hexId2: riverArray[1]
            }
            rivers.push(river)
        }

    });
} catch (e) {
    console.log(e.stack);
}

module.exports = rivers;
