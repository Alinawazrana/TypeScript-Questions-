/*Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
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
    var greatMagicians = magicians.map(function (magician) { return "The Great magician ".concat(magician); });
    return greatMagicians;
}
//Modify the array to add "The Great" to each magician's name.
var greatMagicianNames = make_great(magicianNames);
//Call the function to show the original magician's names.
console.log("Original Magicians:");
showMagicians(magicianNames);
// Call the function to show the great magician's names.
console.log("\n Great Magicians:");
showMagicians(greatMagicianNames);
