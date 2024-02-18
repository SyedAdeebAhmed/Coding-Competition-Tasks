// Function to order a sandwich
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items!");
    }
    else {
        console.log("Items on the sandwich:");
        for (var i = 0; i < items.length; i++) {
            console.log("- ".concat(items[i]));
        }
    }
    console.log("\n");
}
// Call the function three times with different numbers of arguments
order_sandwich("Turkey", "Cheese", "Lettuce");
order_sandwich("Ham", "Swiss Cheese");
order_sandwich(); // Empty sandwich
