"use strict";
// Your Own Array: Think of your favorite mode of transpotration, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
Object.defineProperty(exports, "__esModule", { value: true });
let favoriteTransportation = [];
favoriteTransportation.push(["Motercycle", "Honda"]);
favoriteTransportation.push(["Car", "Honda"]);
//console.log(favoriteTransportation)
//Using for each loop to print a series of statements:
favoriteTransportation.forEach(([transport, brand]) => { console.log(`I would like to own a ${brand} ${transport}. `); });
