// Tests for equality and inequality with strings
var fruit = 'apple';
// Test 11: Is fruit equal to 'apple'? I predict True.
console.log(fruit == 'apple');
// Test 12: Is fruit not equal to 'orange'? I predict True.
console.log(fruit != 'orange');
// Test using the lower case function
var city = 'New York';
// Test 13: Is the lowercase version of city equal to 'new york'? I predict True.
console.log(city.toLowerCase() == 'new york');
// Numerical tests
var number = 42;
// Test 14: Is number equal to 42? I predict True.
console.log(number === 42);
// Test 15: Is number greater than 50? I predict False.
console.log(number > 50);
// Test 16: Is number less than or equal to 42? I predict True.
console.log(number <= 42);
// Tests using "and" and "or" operators
var x = 5;
var y = 10;
// Test 17: Is x greater than 3 and y less than 15? I predict True.
console.log(x > 3 && y < 15);
// Test 18: Is x less than 4 or y greater than 20? I predict False.
console.log(x < 4 || y > 20);
// Test whether an item is in an array
var colors = ['red', 'green', 'blue'];
// Test 19: Is 'green' in the colors array? I predict True.
console.log(colors.includes('green'));
// Test whether an item is not in an array
// Test 20: Is 'yellow' not in the colors array? I predict True.
console.log(!colors.includes('yellow'));
