function describe_city(city, country = "default country") {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for three different cities
  describe_city("Karachi", "Pakistan");
  describe_city("Paris", "France");
  describe_city("New York"); // This will use the default country
  