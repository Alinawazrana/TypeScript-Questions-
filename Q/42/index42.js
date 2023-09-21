"use strict";
// Great Magicians: Start with a copy of your program from Exercise 41.Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
// Array of magician's names.
var magicianNames = ["David Copperfield", "Doug Henning", "Lance Burton", "Ricky Jay", "Mark Wilson"];
function showMagicians(magicians) {
    {
        for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
            var magician = magicians_1[_i];
            console.log(magician);
        }
    }
}
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "The Great Magician ".concat(magician); });
    return greatMagicians;
}
//Modify the array to add "The Great" to each magician's name.
var greatMagicianNames = make_great(magicianNames);
// Call the function to show the great magician's names.
console.log("\n Great Magicians:");
showMagicians(greatMagicianNames);
