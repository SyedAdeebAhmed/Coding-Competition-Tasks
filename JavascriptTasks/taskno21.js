var cities = [
    { name: "Tokyo", country: "Japan", population: 37797531 },
    { name: "New York", country: "United States", population: 8175133 },
    { name: "Paris", country: "France", population: 2140526 },
    { name: "Sydney", country: "Australia", population: 5312163 },
];
console.log("Information about Cities:");
for (var i = 0; i < cities.length; i++) {
    console.log("".concat(i + 1, ". ").concat(cities[i].name, ", ").concat(cities[i].country, " - Population: ").concat(cities[i].population));
}
