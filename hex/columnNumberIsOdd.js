const getColumnNumberFromHexId = require('./getColumnNumberFromHexId');

module.exports = function(columnNumber){
    return columnNumber % 2 !== 0;
}