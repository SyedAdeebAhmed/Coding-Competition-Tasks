var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to make magicians great
function make_great(magicians) {
    var greatMagicians = []; // New array to store modified names
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians[i] = "the Great ".concat(magicians[i]);
    }
    return greatMagicians; // Return the new array
}
// Function to show magicians
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Array of magician's names
var magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];
// Call make_great() with a copy of the original array
var greatMagiciansArray = make_great(__spreadArray([], magicianNames, true));
// Call show_magicians() with each array to show the results
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nGreat Magicians:");
show_magicians(greatMagiciansArray);
