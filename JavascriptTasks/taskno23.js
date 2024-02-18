var car = 'subaru';
// Test 1: Is car equal to 'subaru'? I predict True.
console.log(car == 'subaru');
// Test 2: Is car not equal to 'toyota'? I predict True.
console.log(car != 'toyota');
// Test 3: Is car strictly equal to 'Subaru' (case-sensitive)? I predict False.
console.log(car === 'Subaru');
// Test 4: Is car not strictly equal to 'subaru'? I predict False.
console.log(car !== 'subaru');
// Test 5: Is the length of car's value greater than 5? I predict False.
console.log(car.length > 5);
// Test 6: Is the length of car's value less than or equal to 7? I predict True.
console.log(car.length <= 7);
// Test 7: Does car start with the letter 's'? I predict True.
console.log(car.startsWith('s'));
// Test 8: Does car end with the letter 'u'? I predict True.
console.log(car.endsWith('u'));
// Test 9: Is the type of car a string? I predict True.
console.log(typeof car === 'string');
// Test 10: Is car equal to 'subaru' or 'honda'? I predict True.
console.log(car == 'subaru' || car == 'honda');
