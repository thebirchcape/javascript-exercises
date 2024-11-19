const repeatString = function(stringToRepeat, num) {
    result = ""
    if (num<0) {
        return "ERROR"
    } else {
        for (let i=0; i<num; i++) {
            result = result+stringToRepeat
        }
        return result
    }
};

// Do not edit below this line
module.exports = repeatString;
