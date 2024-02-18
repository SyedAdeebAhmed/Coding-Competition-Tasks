var Name="nelson mandela";

console.log("Upper Case: " + Name.toUpperCase());

console.log("Lower Case: " + Name.toLowerCase());

console.log("Title Case: " + Name.replace(/\b\w/g, char => char.toUpperCase()));