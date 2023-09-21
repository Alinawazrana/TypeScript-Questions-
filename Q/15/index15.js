"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestList = [
    "Mr, Zia khan",
    "Mr, Jahanzaib Tayab",
    "Mr, Muhammad Ali Jinah",
];
//Step1:Print the name of the guest who can’t make it.
let guestHowcantMakeit = "Mr, Muhammad Ali Jinah";
console.log(`${guestHowcantMakeit} can’t make it to Dinner.`);
//Step2:Replacing the name of the guest who can’t make it with the name of the new guest.
let NewGuest = "Mr, Aabid Shirwani";
let indexOfguestHowcantMakeit = guestList.indexOf(guestHowcantMakeit);
console.log(indexOfguestHowcantMakeit);
if (indexOfguestHowcantMakeit !== -1) {
    guestList[indexOfguestHowcantMakeit] = NewGuest;
}
console.log(guestList[2]);
//Step3:Print a second set of invitation messages, one for each guest.
console.log("second set of invitation messages");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, You are invited to dinner.`);
});
