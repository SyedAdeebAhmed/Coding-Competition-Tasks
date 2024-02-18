// List of current usernames
var current_users = ["admin", "Alice", "Bob", "Charlie", "David"];
// List of new usernames
var new_users = ["Eric", "Bob", "Mallory", "alice", "Frank"];
// Function to check if a username is unique (case-insensitive)
function isUniqueUsername(username, existingUsernames) {
    var lowercaseUsername = username.toLowerCase();
    return !existingUsernames.map(function (u) { return u.toLowerCase(); }).includes(lowercaseUsername);
}
// Loop through new usernames and check for uniqueness
for (var i = 0; i < new_users.length; i++) {
    var username = new_users[i];
    if (isUniqueUsername(username, current_users)) {
        console.log("Username '".concat(username, "' is available. You can use it!"));
        // Add the new username to the current usernames array
        current_users.push(username);
    }
    else {
        console.log("Sorry, the username '".concat(username, "' is already taken. Please choose another one."));
    }
}
