function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("T-shirt size: ".concat(size.toUpperCase()));
    console.log("Message printed on the shirt: \"".concat(message, "\""));
}
// Make a large shirt with the default message
make_shirt();
// Make a medium shirt with the default message
make_shirt("medium");
// Make a shirt of any size with a different message
make_shirt("small", "Custom message for a small shirt!");
