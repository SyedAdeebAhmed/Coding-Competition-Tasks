// Function to store information about a car
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Process additional keyword arguments
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and two other name-value pairs
var carInfo = create_car("Toyota", "Camry", "color", "Blue", "year", 2022);
// Print the object to check if the information was stored correctly
console.log(carInfo);
