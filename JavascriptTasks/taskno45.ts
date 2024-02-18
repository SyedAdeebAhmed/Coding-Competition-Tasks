// Function to store information about a car
function create_car(manufacturer, model, ...options) {
    let car = {
      manufacturer: manufacturer,
      model: model
    };
  
    // Process additional keyword arguments
    for (let i = 0; i < options.length; i += 2) {
      let key = options[i];
      let value = options[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  // Call the function with required information and two other name-value pairs
  let carInfo = create_car("Toyota", "Camry", "color", "Blue", "year", 2022);
  
  // Print the object to check if the information was stored correctly
  console.log(carInfo);
  