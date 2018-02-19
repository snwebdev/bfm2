module.exports = function(hexId, forests){
    for (var i = 0; i < forests.length; i++){
        var forest = forests[i];
        if (forest === hexId) return true;
    }
    return false;
}