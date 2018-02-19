const getRowNumberFromHexId = require('./getRowNumberFromHexId');
const getColumnNumberFromHexId = require('./getColumnNumberFromHexId');
const convertIntegerToString = require('./convertIntegerToString');
const columnNumberIsOdd = require('./columnNumberIsOdd');

module.exports = function(hexId){
    var newRowNumber, newColumnNumber;
    var rowNumber = getRowNumberFromHexId(hexId);
    var columnNumber = getColumnNumberFromHexId(hexId);
    if(columnNumber === 1) return -1;
    newColumnNumber = columnNumber - 1;


    if(columnNumberIsOdd(columnNumber)){
        newRowNumber = rowNumber;
    } else {
        newRowNumber = rowNumber + 1;
    }
    var rowString = convertIntegerToString(newRowNumber);
    var columnString = convertIntegerToString(newColumnNumber);
    return columnString + rowString;
}