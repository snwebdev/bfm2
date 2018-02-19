module.exports = function(hexId, defensiveZones){
    for (var i = 0; i < defensiveZones.length; i++){
        var defensiveZone = defensiveZones[i];
        if (defensiveZone === hexId) return true;
    }
    return false;
}