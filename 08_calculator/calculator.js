const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(array) {
  let summed = 0
	for (const arg of array) {
    summed += arg
  }
  return summed
};

const multiply = function(array) {
  let result = 1
  let i = 0
  while (i < array.length) {
    result *= array[i]
    i++;
  }
  return result
};

const power = function(x, y) {
	return Math.pow(x, y)
};

const factorial = function(x) {
  let i = x;
  let result = 1;
	if (x === 0) {
    return 1;
  }
  while (i > 1) {
    result *= x
    x--;
    i--;
  }
  return result;
};

factorial(1)
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
