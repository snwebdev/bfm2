module.exports = function(integer){
    if (integer < 10){
        return "0" + integer.toString();
    } else{
        return integer.toString();
    }
}