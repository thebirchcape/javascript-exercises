const sumAll = function(num1, num2) {
    let smaller = 0;
    let larger = 0;
    let summed = 0;
    if (num1 < 0 || 
        num2 < 0 || 
        !Number.isInteger(num1) || 
        !Number.isInteger(num2)
    ) {
        console.log("test")
        return "ERROR"
    };
    if (num1 < num2) {
        summed = num1;
        smaller = num1 + 1;
        larger = num2;
    } else {
        summed = num2;
        smaller = num2 + 1;
        larger = num1;
    }
    while (smaller <= larger) {
        summed = summed + smaller;
        smaller++;
    }
    console.log(summed)
    return summed;
};
sumAll("asd", 4)
// Do not edit below this line
module.exports = sumAll;
