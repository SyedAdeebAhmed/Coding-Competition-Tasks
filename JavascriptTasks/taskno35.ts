// Array of animals with a common characteristic
let animals = ["Dog", "Cat", "Rabbit"];

// Use a for loop to print the name of each animal
console.log("Animal names:");
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Modify the for loop to print a statement about each animal
console.log("\nAnimal statements:");
for (let i = 0; i < animals.length; i++) {
  console.log(`A ${animals[i].toLowerCase()} would make a great pet.`);
}

// Additional line outside the for loop
console.log("\nAny of these animals would make a great pet!");
