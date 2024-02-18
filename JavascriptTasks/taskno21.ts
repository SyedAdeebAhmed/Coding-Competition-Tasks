
interface City {
    name: string;
    country: string;
    population: number;
    
  }
  
  
  let cities: City[] = [
    { name: "Tokyo", country: "Japan", population: 37797531 },
    { name: "New York", country: "United States", population: 8175133 },
    { name: "Paris", country: "France", population: 2140526 },
    { name: "Sydney", country: "Australia", population: 5312163 },
    
  ];
  
  
  console.log("Information about Cities:");
  for (let i = 0; i < cities.length; i++) {
    console.log(`${i + 1}. ${cities[i].name}, ${cities[i].country} - Population: ${cities[i].population}`);
  }
  