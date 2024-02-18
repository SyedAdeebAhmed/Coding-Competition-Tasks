// Function to order a sandwich
function order_sandwich(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
      console.log("You ordered an empty sandwich. Please add some items!");
    } else {
      console.log("Items on the sandwich:");
      for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
      }
    }
    console.log("\n");
  }
  
  // Call the function three times with different numbers of arguments
  order_sandwich("Turkey", "Cheese", "Lettuce");
  order_sandwich("Ham", "Swiss Cheese");
  order_sandwich(); // Empty sandwich
  