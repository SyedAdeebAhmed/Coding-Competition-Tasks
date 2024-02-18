// Function to make magicians great
function make_great(magicians) {
    let greatMagicians = []; // New array to store modified names
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians[i] = `the Great ${magicians[i]}`;
    }
    return greatMagicians; // Return the new array
  }
  
  // Function to show magicians
  function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  // Array of magician's names
  let magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];
  
  // Call make_great() with a copy of the original array
  let greatMagiciansArray = make_great([...magicianNames]);
  
  // Call show_magicians() with each array to show the results
  console.log("Original Magicians:");
  show_magicians(magicianNames);
  
  console.log("\nGreat Magicians:");
  show_magicians(greatMagiciansArray);
  