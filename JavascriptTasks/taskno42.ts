// Function to make magicians great
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
    }
  }
  
  // Function to show magicians
  function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  // Array of magician's names
  let magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];
  
  // Call make_great() to modify the array
  make_great(magicianNames);
  
  // Call show_magicians() to see the modified list
  show_magicians(magicianNames);
  