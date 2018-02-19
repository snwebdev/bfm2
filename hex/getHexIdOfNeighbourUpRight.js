const getRowNumberFromHexId = require('./getRowNumberFromHexId');
const getColumnNumberFromHexId = require('./getColumnNumberFromHexId');
const convertIntegerToString = require('./convertIntegerToString');
const columnNumberIsOdd = require('./columnNumberIsOdd');

module.exports = function(hexId){
    var newRowNumber, newColumnNumber;
    var rowNumber = getRowNumberFromHexId(hexId);
    var columnNumber = getColumnNumberFromHexId(hexId);
    newColumnNumber = columnNumber + 1;
    if(columnNumberIsOdd(columnNumber)){
        newRowNumber = rowNumber - 1
    } else {
        newRowNumber = rowNumber;
    }
    var rowString = convertIntegerToString(newRowNumber);
    var columnString = convertIntegerToString(newColumnNumber);
    return columnString + rowString;
}