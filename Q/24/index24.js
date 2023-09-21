"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
// Tests for equality and inequality with strings.
const str1 = "Hello";
const str2 = "hello";
console.log('step1 =', str1 === str2); //False.
console.log('Step2 =', str1 !== str2); //True.
//  Tests using the lower case function.
const text1 = "Hello World";
const text2 = "hello world";
console.log('Step3 =', text1.toLowerCase() === text2); //True.
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
const num1 = 10;
const num2 = 5;
console.log('Step4 =', num1 === num2); //False.
console.log('Step5 =', num1 !== num2); //True.
console.log('Step6 =', num1 > num2); //True.
console.log('Step7 =', num1 < num2); //False.
console.log('Step8 =', num1 >= num2); //True.
console.log('Step9 =', num1 <= num2); //False.
//Tests using "and" and "or" operators.
const X = 5;
const Y = 10;
const Z = 15;
console.log('Step10 =', X < Y && Y < Z);
//True,both conditions are true.
console.log('Step11 =', X < Y || Y > Z);
//True,at least one codition is true.
console.log('Step12 =', X > Y && Y > Z);
//False,both c'Step4',ondition are false.
console.log('Step13 =', X > Y || Y > Z);
//False,both codition are false.
//Test whether an item is in an array.
const fruits = [
    'Apple', 'Banana', 'Orange', 'Grapes'
];
console.log(fruits.includes('Banana')); //True.
console.log(fruits.includes('Kiwi')); //False.
//Test whether an item is not in an array.
const Color = [
    'Red', 'Green', 'Blue', 'Yellow'
];
console.log(!Color.includes('Purple')); //True
console.log(!Color.includes('Green')); //False.
