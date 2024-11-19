const reverseString = function(stringToReverse) {
    let reversed = "";
    reversed = stringToReverse.split("").reverse().join("");
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
