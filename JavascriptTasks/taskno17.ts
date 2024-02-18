// Shrinking Guest List Program
// By [SyedAdeebAhmed]
// Date: [16-02-2024]

// Original guest list
let guestList = ["Albert Einstein", "Jane Austen", "Isaac Newton", "Marie Curie", "Ada Lovelace"];

// Print original dinner invitation for each person
console.log("Original Invitations:");
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner. We would be honored to have you join us for an evening of great conversation and delicious food.\n\nSincerely,\n[SyedAdeebAhmed]\n`);
}

// Inform that a smaller dinner table is available
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.\n");

// Remove guests until only two names remain
while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  console.log(`Sorry, ${removedGuest}, we can't accommodate you for dinner.`);
}

// Print invitations for the remaining two guests
console.log("\nInvitations for the remaining two guests:");
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]},\nYou are still invited to dinner. We look forward to having you join us for an evening of great conversation and delicious food.\n\nSincerely,\n[SyedAdeebAhmed]\n`);
}

// Remove the last two names from the list
guestList.pop();
guestList.pop();

// Print the empty list
console.log("Empty guest list:", guestList);
