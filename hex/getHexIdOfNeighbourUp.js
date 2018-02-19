const getRowNumberFromHexId = require('./getRowNumberFromHexId');
const getColumnNumberFromHexId = require('./getColumnNumberFromHexId');
const convertIntegerToString = require('./convertIntegerToString');

module.exports = function(hexId){
    var rowNumber = getRowNumberFromHexId(hexId);
    var columnNumber = getColumnNumberFromHexId(hexId);
    if(rowNumber === 1){
        return -1;
    }else{
        var rowString = convertIntegerToString(rowNumber - 1);
        var columnString = convertIntegerToString(columnNumber);
        return columnString + rowString;
    }


}
