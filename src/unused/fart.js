// printing
console.log("Hello world!")

// variables
let fart = 'hi ^_^'; // the semicolon at the end is needed for stuff like this think of it as a end statement but not
    console.log(fart);
// variables are a little less straightforward than it is in lua but its easy to adapt

// constants
let fartRate = 0.3; // you can change this at any time in any code with just fartRate (whatever you named the value) = # 
    fartRate = 1 // like this
    console.log(fartRate);

// types of values
let stringvalue = "Hello, I'm a string value!"    // this is a string literal/value
let numbervalue = 16;    // this is a number literal/value
let boolvalue = true;   // this is a bool value

// a quick way of having cleaner code is doing something like this
let test = {
    teststring: 'test string',
    testvalue: 22
};
// console.log(test); 

// so say if i wanted to print multiple things at once i can do that easily like this
// obviously it can be used for more than one thing not just printing

test.teststring = 'evil string';
console.log(test);
// something cool about javascript is that its just like lua
// you can change values while its running

// arrays
let reallySpecificPiecesOfBread = ['bread named tony', 'bread named bob'];
console.log(reallySpecificPiecesOfBread[0]); // this prints tony you can change the 0 to a 1 and it will print bob instead
// you can modify the array aswell, add a third bread!
reallySpecificPiecesOfBread[2] = 'bread named timmy';
console.log(reallySpecificPiecesOfBread[2])
// you can use this line of code to see how many values are stored in your array
console.log(reallySpecificPiecesOfBread.length);

// functions
function testFunction() {
    // this is where you define the functions logic
    console.log("cutot c:")
}

testFunction();

// functions can be really unique and it really depends on how you use them

function testFunctionTwo(twotestfunction)   {
    console.log("cutot c:" + twotestfunction);
}

testFunctionTwo(' my mommy said no more skibidi toliet');

// you can use functions to calculate a value
function square(number) {
    return number * number
}

let number = square(2);
console.log(number);    // you could possibly create a calculator using javascript using these types of functions
