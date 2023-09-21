"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//•Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//•Add one new guest to the beginning of your array.
//•Add one new guest to the middle of your array. 
//•Use append() to add one new guest to the end of your list. 
//•Print a new set of invitation messages, one for each person in your list.
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = [
    "Mr, Zia khan",
    "Mr, Jahanzaib Tayab",
    "Mr, Aabid Shirwani"
];
//Step1:Informing people that you found a bigger dinner table.
for (let guest of guestList) {
    console.log(`Hello , ${guest} We found a bigger dinner table.`);
}
//Step2:Add one new guest to the beginning of your array.
let newGuestAtBeginning = "Mr, Imran Khan";
guestList.unshift(newGuestAtBeginning);
console.log(guestList);
//Step3:Add one new guest to the middle of your array.
let newGuestinMiddle = "Mr, Ali Raza";
let middleindex = Math.floor(guestList.length / 2);
guestList.splice(middleindex, 0, newGuestinMiddle);
console.log(guestList);
//Step4:Use append() to add one new guest to the end of your list.
let newGuestAtEnd = "Mr Hassin Raza";
guestList.push(newGuestAtEnd);
console.log(guestList);
//Step5:Print a new set of invitation messages, one for each person in your list.
console.log("New set of invitation messages:");
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner please join us.`);
}
