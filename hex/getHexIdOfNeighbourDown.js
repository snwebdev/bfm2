const getRowNumberFromHexId = require('./getRowNumberFromHexId');
const getColumnNumberFromHexId = require('./getColumnNumberFromHexId');
const convertIntegerToString = require('./convertIntegerToString');
const columnNumberIsOdd = require('./columnNumberIsOdd');


module.exports = function (hexId) {
    var rowNumber = getRowNumberFromHexId(hexId);
    var columnNumber = getColumnNumberFromHexId(hexId);

    if (columnNumberIsOdd(columnNumber) && rowNumber === 10) return -1;
    if (!columnNumberIsOdd(columnNumber) && rowNumber === 11) return -1;

    var rowString = convertIntegerToString(rowNumber + 1);
    var columnString = convertIntegerToString(columnNumber);
    return columnString + rowString;
}