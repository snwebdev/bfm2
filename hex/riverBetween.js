var rivers = require('../setup/rivers');

module.exports = function(hexId1, hexId2){
    for (var i = 0; i < rivers.length; i ++){
        var river = rivers[i];
        if (river.hexId1 === hexId1 && river.hexId2 === hexId2) return true;
        if (river.hexId1 === hexId2 && river.hexId2 === hexId1) return true;

    }
    return false;
}