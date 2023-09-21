"use strict";
/*Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.*/
Object.defineProperty(exports, "__esModule", { value: true });
// If the person is less than 2 years old, print a message that the person is a baby.
let num = (age) => {
    if (age < 2) {
        return console.log(`The Person Age is at least ${age} year old and less than 2 years old and So,that the person is a baby.`);
    }
    else if (age < 4) {
        return console.log(`The Person Age is at least ${age} year old and less than 4 years old and So,that the person is a toddler.`);
    }
    else if (age < 13)
        return console.log(`The Person Age is at least ${age} year old and less than 13 years old and So,that the person is a kid.`);
    else if (age < 20) {
        return console.log(`The Person Age is at least ${age} years old and less than 20 years old and So,}that the person is a teenager .`);
    }
    else if (age < 65) {
        return console.log(`The Person Age is at least ${age} years old and less than 65 years old and So,that the person is an adult.`);
    }
    else {
        console.log(`The Person Age is at least ${age} years old and So,that the person is an elder.`);
    }
};
num(1);
num(2);
num(4);
num(13);
num(20);
num(65);
