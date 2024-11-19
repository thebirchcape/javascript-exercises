const removeFromArray = function(arrayToModify) {
    const args = Array.prototype.slice.call(arguments, 1);
    for (const arg of args) {
        while (arrayToModify.includes(arg)) {
            console.log(arg)
            const index = arrayToModify.indexOf(arg);
            if (index>=0) arrayToModify.splice(index, 1);
        }
        } 
    return arrayToModify
};

// Do not edit below this line
module.exports = removeFromArray;
