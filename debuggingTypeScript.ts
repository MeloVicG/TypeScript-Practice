import { number } from "prop-types";

var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
// myString = 9;
//---needs to be a number---
var mynumber: number = 9;
//---------------------------------------------

function sayHello(name: string) {
    return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
// console.log(sayHello(9));
//----need to change to string------
console.log(sayHello("9"));

//---------------------------------------------
function fullName(firstName: string, lastName: string, middleName: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones", "Gmoney"));



//--4-------------------------------------------

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student) {
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    // belt: 4
    //no s
    belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));


//5--------------------------------------------
class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug() {
        console.log("Console.log() is my friend.")
    }
}
// This is not making an instance of Ninja, for some reason:
// const shane = Ninja();
const shane = new Ninja("jacob", "sally");
console.log(shane);

// Since I'm having trouble making an instance of Ninja, I decided to do this:
// const turing = {
//     fullName: "Alan Turing",
//     firstName: "Alan",
//     lastName: "Turing"
// }
//-not sure if this is right answer?------
const turing = new Ninja(
    "Alan",
    "Turing",
    // fullName: "Alan Turing",
)
// Now I'll make a study function, which is a lot like our graduave:
function study(programmer: Ninja) {
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));

//--arrow functions-------------------------------------------

var increment = x => x + 1;
// This works great:
console.log(increment(3));

var square = x => x * x;
// This is not showing me what I want:
console.log(square(4));

// This is not working:
var multiply = (x, y) => x * y;
console.log(multiply(2, 3));


// Nor is this working:
// var increment = x => x + 1;
// // This works great:
// console.log(increment(3));
// var square = x => { x * x };
// // This is not showing me what I want:
// console.log(square(4));
// // This is not working:
// var multiply = x, y => x * y;
// // Nor is this working:
// var math = (x, y) => let sum = x + y;
// let product = x * y;
// let difference = Math.abs(x - y);
// return [sum, product, difference];
//--------maybe this is right???----------
let sum = (x: number, y: number): number => {
    return x + y
};
let product = (x: number, y: number) => {
    return x * y
};
let difference = (x: number, y: number) => {
    return Math.abs(x - y)
};
var math = (x, y) => {
    return [product(x, y), sum(x, y), difference(x, y)];
}
console.log(math(3, 2));


//---------------------------------------------


class Elephant {
    constructor(public age: number) { }
    birthday = function () {
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)

setTimeout(() => {
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.

//---------------------------------------------