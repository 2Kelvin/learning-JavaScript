//  ANONYMOUS FUNCTION EXPRESSIONS (anonymous functions)

// Anonymous Functions -> are functions that don't have names/ function expressions without names. 
// Example1
window.onload = function () {
    alert("See, you don't need a function declaration/name for this function to run!");
};
// anonymous functions help clean up the code -> no using unnecessary one time variable names

// Example2)
// // Normal code
// function cookieAlarm() {
//     alert("Time to take the cookies out of the oven");
// }

// setTimeout(cookieAlarm, 600000);

// Better way to write the above commented out code using anonymous functions(function expressions)
setTimeout(function () {
    alert("Time to take the cokies out of the oven");
}, 600000);

// if a function is expected as an argument, you can pass it as a function expression no problem (like example above)
// if you need to return a function from within a function, you can also return a function expression 
// if your code expects a function reference, you can ALWAYS  put a function expression in its place (bcoz it evaluates to a function reference)


// DEFINING FUNCTION EXPRESSIONS

// remember; the browser passses thro your JavaScript code twice
// 1st pass: function declarations are parsed and functions defined
// 2nd pass: browser executes your code from top to bottom; which is when function expressions are defined (with the rest of the code)
// Basically, function declarations are defined before function expressions
// you can place function declarations anywhere in your code and invoke them wherever, they will work!
// Hoisting -> creating functions that are defined everywhere in your code e.g) function declarations
// function expressions aren't defined until they are evaluated ... < see comments on var howl below >
var happy = true;
// the function expression below (assigned the variable howl), is a function expression therefore defined in the 2nd pass with the rest of the code
// this will cause an error because it was invoked in the if statement above before being defined **SEE FIX BELOW ON LINE 4
// the howl statement below should be evaluated first before the howl() is invoked for this function expression to work
// **FIX -> moved this var howl statement to the top before howl() was invoked
var howl = function (num) {
    for (i = 0; i < num; i++) {
        console.log("Auuuh auuuh auuhh auuuuuuuuuhhhh!");
    }
};

if (happy) {
    sing(4);
    howl(3);
}

// function sing() below is a function declaration therefore defined during the 1st pass
// therefore, when invoked in the if statement, this function works bcoz it's already defined
function sing(num) {
    for (i = 0; i < num; i++) {
        console.log("This is gonna be the best day of my life, my liiiiife!");
    }
}


// NESTED FUNCTIONS -->> functions defined within other functions

// nesting functions affects the scope of functions (only visible inside those functions) unlike global scope functions which are accessible everywhere in your code
// Nested functions have local scope
// you can define a function inside another function (either a function declaration or a function expression)
// a nested function declaration is defined everywhere within the body of the function
// a nested function expression is defined (used) only after the function expression is evaluated (fully created)
var washingClothes = true;
// var rinse/ rinse() is a global scoped variable/ function
// rinser() is a local scoped function -> its scope is the entire rinse() function
var rinse = function (num) {
    var action = "Rinsing clothes"
    function rinser() {
        console.log(action);
    }
    for (var i = 0; i < num; i++) {
        rinser();
    }
};

// whistle() is a global scoped function
// var whistler/ whistler() is a local scoped variable/ function -> its scope is the entire whistle() function
function whistle(num) {
    var sound = "Can you blow my whistle baby, whistle baby, let me know"
    var whistler = function () {
        console.log(sound);
    };
    for (var i = 0; i < num; i++) {
        whistler();
    }
}

if (washingClothes) {
    whistle(10);
    rinse(7);
}


// LEXICAL SCOPE -> means determining the scope of a variable by reading the structure of the code (as oppossed to waiting until the code runs to figure it out)
// JavaScript's rules for scoping are based purely on the structure of your code
// in JavaScript, only functions introduce new scope i.e local scope
// variable scope: local scope(in a function/ nested functions), global scope(visible to all code) and undefined (not defined at all; locally or globally)
// in a case with many layers of nested functions, you can think of each nested function as having its own little environment with its own variables
// Henceforth, a chain of environments of all nested functions is created is created; from the innermost to the outermost
// So, when finding a variable in the environment, you start from the closest/innermost environment and then follow the chain of environments till you find your variable
// if you don't find your variable in the chain of locallly scoped environments, look for it in the global environment
// parameter variables are considered as local variables in your function, therefore they too are included as variables in the function's environment
// Basically, if you have a function returned from within a function, it carries its own attached environment with it..see example 3 
// JavaScript functions are always evaluated in the same scoping environment in which they were defined
// therefore, within a function, if you want to determine where a variable is coming from, search in its enclosing functions, from the most nested to the least nested

// example
var quote = "Am a GLOBAL quote, everyone understands me";

function learnThis() {
    var quote = "Am a LOCAL quote, only specific people get me";
    return quote;
}

var result = learnThis();
console.log(result);
// this returns the 'quote' in the NEAREST function scope (local), if it isn't there, then we look for it in the global scope
// in this case therefore, it returns the value of the local quote not the global one

// example 2
// adding a nested function in the lexical scope
var quote2 = "GLOBAL quote here";

function learnThisToo() {
    var quote2 = "LOCAL quote here";

    function nestedFunction() {
        return quote2;
    }

    return nestedFunction();
}

var result2 = learnThisToo();
console.log(result2);
// same here; we return the value of the quote (variable) in the closest enclosing function
// therefore we return the value of the local quote variable not the global one

// example 3
// with lexical scope, what matters is the structure in which the function is defined, so the qoute3 used here is the local one with the value "am so LOCAL mehn!"
// the function nestedFunction3() was defined around the local quote3 variable, so that's what will be returned; basically the local quote3 is in nestedFunction3's scope that's why it's returned
var quote3 = "my oh my am I GLOBAL";

function learnThis3() {
    var quote3 = "am so LOCAL mehn!";

    function nestedFunction3() {
        return quote3;
    }

    return nestedFunction3;
}

var newFunction = learnThis3();
var result3 = newFunction();
console.log(result3);

// all local variables are stored in an environment
// an environment can hold many local variables
// every function has an attached environment containing local variables within its scope
// quote3 above is an example of a local variable stored in nestedFunction3's (attached) environment
// when a function is returned, it's returned WITH the environment attached to it
// therefore, when the nestedFunction3 above is returned, it's returned with it's (attached) environment which holds the local variable quote3


// CLOSURE -->> a function together with a referencing environment

// to use a closure out of the context it was created, you have to return it (eg. in the function it's nested in; like in the examples below)
// remember, an environment stores the function's local varaibles(including paremeter variables)
// a function has basically 2 variables in its body code: local variables(including parameter variables) and free variables
// FREE VARIABLES -> Variables not defined locally in a function
// Note|| free variables are (**NOT global variables), they're variables from functions nesting this function henceforth available in this function's environment 
// When a function environment has a value for each of the free variables, we say that we have a CLOSED FUNCTION
// when you take this (closed) funcction and its environment together, we have a CLOSURE
// a closure results when you combine a function that has free variables with an environment that provides variable bindings for all those free variables

// // example code { conter function }
// var count = 0;

// function counter() {
//     count = count + 1;
//     return count;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());

// the above commented out code works, but it can be problematic if your code is worked on by other people; 
// it uses a global variable (count), other people may use a similar variable name in the code elsewhere causing the code to clash
// better solution for this is to use a local variable (count); protected from other 'clashing' variables and a closure; see example below
// when we call doCount(which is a reference to counter -> the closure) and need to get the value of count, we use the count variable in the closure's environment
// the global scope NEVER sees variable 'count'; the ONLY way to get to it is through calling doCount
// we can use variable count anytime (ONLY) by calling doCount

function makeCounter() {
    var count = 0;
    console.log(count); //just me consol.logging the original value

    function counter() {
        count = count + 1;
        return count;
    }

    // this is the closure function; it carries itself;counter() and its environment which contains the free variable count
    // if you don't return this (closure) function, doCount won't work since it doesn't have access to the local || free variable (count)
    return counter;
}

var doCount = makeCounter();

console.log(doCount());
console.log(doCount());
console.log(doCount());
// code explanation
// when we call makeCounter, it creates a counter function and returns it with its environment containing free variable (count)
// Basically, calling makeCounter creates a closure --> function counter
// function returned from makeCounter {counter()} is stored in doCount
// calling doCount executes the body code in counter()
// when we encounter the variable 'count', we look it up in the environment and retrieve its value
// we increment count, save the new value back in the environment and return that new value to where doCount was called
// each time doCount is called, we repeat the same steps < from step: calling doCount >

// other closure examples
// function guess is the closure function
function makePassword(password) {
    return function guess(passwordGuess) {
        return (passwordGuess === password);
    };
}

var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));

// closure example 2
function multN(n) {
    return function multiplyBy(myNumber) {
        return n * myNumber;
    }
}

var multBy9 = multN(9);
console.log("Multiplying 3: " + multBy9(3));
console.log("Multiplying 7: " + multBy9(7));

// closure object method
function newMakeCounter() {
    var newCount = 7;
    return {
        increment: function () {
            newCount++;
            return newCount;
        }
    };
}

var theCounter = newMakeCounter();
console.log(theCounter.increment());
console.log(theCounter.increment());
console.log(theCounter.increment());


// CREATING A CLOSURE BY PASSING A FUNCTION EXPRESSION AS AN ARGUMENT

// returning a function from a function isn't the only way to create a closure
// a closure can be created whenever you have a reference to a function that has free variables; 
// this function is then executed otside of the context in which it was created

// you can create a closure by passing a function to a function
// this function passed will be executed in a completely different context than the one it was defined/created
// see example below
function makeTimer(doneMessage, t) {
    setTimeout(function () {
        alert(doneMessage);
    }, t);
}

makeTimer("Cookies are done!", 1000);
// the function in setTimeout is the closure
// bcoz; it has a free variable 'doneMessage' in its environment and will be executed 1sec after function makeTimer is completed
// we pass a function expression with a free variable 'doneMessage' to setTimeout()
// by evaluating the function expression, we get a function reference (closure) which is passed to setTimeout
// setTimeout holds on to this closure function and then 1 second later calls it
// again; the function passed into seTimeout is a closure bcoz it comes with an environment binding the free variable 'doneMessage' to the string "Cookies are done!"

// the closure contains the actual environment not a copy
// the closure's environment references live variables being used by your code
// if a variable's value (in the env) is changed by code outside your closure function, that's the new value your closure sees during evaluation
// example
function setTimer(theMessage, n) {
    setTimeout(function () {
        alert(theMessage);
    }, n);
    theMessage = "HAAWWWT!";
}

setTimer("Cookies are done!", 1500);