// More Guests Program
// By [SyedAdeebAhmed]
// Date: [16-02-2024]

// Original guest list
let guestList = ["Leonardo da Vinci", "Jane Austen", "Neil Armstrong"];

// Print original dinner invitation for each person
console.log("Original Invitations:");
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner. We would be honored to have you join us for an evening of great conversation and delicious food.\n\nSincerely,\n[SyedAdeebAhmed]\n`);
}

// Identify the guest who can't make it
let guestCannotMakeIt = "Neil Armstrong";

// Print a statement about the guest who can't make it
console.log(`${guestCannotMakeIt} regrets that they cannot make it to the dinner.\n`);

// Find the index of the guest who can't make it
let indexOfGuestCannotMakeIt = guestList.indexOf(guestCannotMakeIt);

// Replace the name of the guest who can't make it with a new person
let replacementGuest = "Marie Curie";
guestList[indexOfGuestCannotMakeIt] = replacementGuest;

// Inform that a bigger dinner table is found
console.log("Good news! We found a bigger dinner table.\n");

// Add new guests to the list
guestList.unshift("Albert Einstein"); // Add to the beginning
guestList.splice(Math.ceil(guestList.length / 2), 0, "Isaac Newton"); // Add to the middle
guestList.push("Ada Lovelace"); // Add to the end

// Print updated dinner invitation for each person
console.log("Updated Invitations:");
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner. We would be honored to have you join us for an evening of great conversation and delicious food.\n\nSincerely,\n[SyedAdeebAhmed]\n`);
}
