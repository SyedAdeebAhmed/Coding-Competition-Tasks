// Define the City interface
interface City {
  name: string;
  country: string;
  population: number;
  // Add any other relevant properties
}

// Creating an array of city objects
let cities: City[] = [
  { name: "Tokyo", country: "Japan", population: 37797531 },
  { name: "New York", country: "United States", population: 8175133 },
  { name: "Paris", country: "France", population: 2140526 },
  { name: "Sydney", country: "Australia", population: 5312163 },
  // Add more cities with their information
];

// Intentionally produce an array index error
let indexWithError = 5; // This index is out of bounds

// Check if the index is within bounds before accessing the array
if (indexWithError >= 0 && indexWithError < cities.length) {
  console.log(cities[indexWithError].name);
} else {
  console.log(`Index ${indexWithError} is out of bounds.`);
}
