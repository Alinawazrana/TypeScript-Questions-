"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", message = "I love Typescript.") {
    return console.log(`Size ${size} , Message : ${message}`);
}
// Large shirt with the default message :
make_shirt();
// Medium  shirt with the default message :
make_shirt("medium");
// Custom shirt whit a different message and size:
make_shirt("small", "Hello, Typescript!");
