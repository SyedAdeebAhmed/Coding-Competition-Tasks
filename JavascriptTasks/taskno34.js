// Array of favorite pizza names
var favoritePizzas = ["Margherita", "Pepperoni", "Vegetarian"];
// Use a for loop to print the name of each pizza
console.log("Pizza names:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
// Modify the for loop to print a sentence using the name of the pizza
console.log("\nPizza statements:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log("I like ".concat(favoritePizzas[i], " pizza."));
}
// Additional line outside the for loop
console.log("\nI really love pizza!");
