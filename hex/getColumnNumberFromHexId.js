module.exports = function(hexId){
    var columnNumberString = hexId.substring(0,2);
    var columnNumber = parseInt(columnNumberString)
    return columnNumber;
}