// List of current usernames
let current_users = ["admin", "Alice", "Bob", "Charlie", "David"];

// List of new usernames
let new_users = ["Eric", "Bob", "Mallory", "alice", "Frank"];

// Function to check if a username is unique (case-insensitive)
function isUniqueUsername(username, existingUsernames) {
  let lowercaseUsername = username.toLowerCase();
  return !existingUsernames.map(u => u.toLowerCase()).includes(lowercaseUsername);
}

// Loop through new usernames and check for uniqueness
for (let i = 0; i < new_users.length; i++) {
  let username = new_users[i];

  if (isUniqueUsername(username, current_users)) {
    console.log(`Username '${username}' is available. You can use it!`);
    // Add the new username to the current usernames array
    current_users.push(username);
  } else {
    console.log(`Sorry, the username '${username}' is already taken. Please choose another one.`);
  }
}


