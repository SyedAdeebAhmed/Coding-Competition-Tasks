function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`T-shirt size: ${size.toUpperCase()}`);
    console.log(`Message printed on the shirt: "${message}"`);
  }
  
  // Make a large shirt with the default message
  make_shirt();
  
  // Make a medium shirt with the default message
  make_shirt("medium");
  
  // Make a shirt of any size with a different message
  make_shirt("small", "Custom message for a small shirt!");
  