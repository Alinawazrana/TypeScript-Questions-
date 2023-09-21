"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
let mountain = {
    name: "K2",
    height: "8611Metres",
    description: "K2,at 28,251 feet above sea level,Is the second-Highest mountain on earth."
};
//Define an array of objects:
let mountains = [];
//Pushing multipul object:
mountains.push(mountain);
mountains.push({
    name: "Nanga Parbat",
    height: "8126Metres",
    description: "Currently, this mountain is ranked 9th tallest mountain in the world."
});
let mountain2 = {
    name: "Broad Peak",
    height: "8011Metres",
    description: "The 12th Highest mountain in the world."
};
mountains.push(mountain2);
console.log(mountains);
//function to display mountains.
function displayMountains(Mountains) {
    for (let i of mountains) {
        console.log(`Title: ${i.name}
        Description: ${i.description}
        Height: ${i.height}
        -----------\n `);
    }
}
displayMountains(mountains);
