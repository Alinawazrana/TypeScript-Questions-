"use strict";
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
•Make a list of five or more usernames called current_users.
•Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
•Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
•Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Step 1 array:
const current_users = ['Asif', 'Ali', 'Ahmed', 'Asad', 'Imran'];
const new_users = ['ali', 'Burhan', 'ahmed', 'Aisha', 'Kamran'];
//Step 2 function:
function checkUserNames(current_users, new_users) {
    const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase());
    //2nd step of function:
    for (const newUser of new_users) {
        const lowercasedNewUser = newUser.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
            console.log(`username "${newUser}" Is already taken. please enter a new username.`);
        }
        else {
            console.log(`usernamde "${newUser}" Is available.`);
        }
    }
}
checkUserNames(current_users, new_users);
