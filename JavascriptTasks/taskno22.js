// Creating an array of city objects
var cities = [
    { name: "Tokyo", country: "Japan", population: 37797531 },
    { name: "New York", country: "United States", population: 8175133 },
    { name: "Paris", country: "France", population: 2140526 },
    { name: "Sydney", country: "Australia", population: 5312163 },
    // Add more cities with their information
];
// Intentionally produce an array index error
var indexWithError = 5; // This index is out of bounds
// Check if the index is within bounds before accessing the array
if (indexWithError >= 0 && indexWithError < cities.length) {
    console.log(cities[indexWithError].name);
}
else {
    console.log("Index ".concat(indexWithError, " is out of bounds."));
}
