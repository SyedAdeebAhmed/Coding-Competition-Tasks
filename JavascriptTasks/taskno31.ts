// Make an array of usernames
let usernames = ["admin", "Eric", "Alice", "Bob", "Charlie"];

// Check if the list of users is not empty
if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  // Loop through the array and print greetings
  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
  }
}
