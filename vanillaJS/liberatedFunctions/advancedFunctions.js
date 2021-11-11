//FUNCTION DECLARATIONS VS FUNCTION EXPRESSIONS

//Function Declaration -> function has a name that can be used to reference and invoke the function 
function meow(num) {
    for (var i = 0; i < num; i++) {
        console.log("Meow!");
    }
}

meow(7);

//Function Expression -> function has no name; used like an assignment statement and its value assigned a variable
var jump = function (num) {
    for (var i = 0; i < num; i++) {
        console.log("Jumping!");
    }
};

jump(2);
//variable 'jump' above, is a reference to a function
// function reference is the value resulting from a function; it is a first class value
//the value resulting from the function is assigned to the variable 'jump'
//invoking the variable 'jump' results to the function being invoked too

//BROWER and FUNCTION DECLARATION and FUNCTION EXPRESSSIONS
//-> when the browser parses your page, before evaluating any other code, it looks for function declarations 1st
//-> when it finds a function declaration, it assigns the resulting reference (result of the function) to a variable with the same name as the function
//-> it then stores this result until the function is invoked
//-> then it goes back to your code and executes it top to bottom
//SUMMARY
// function declarations are evaluated before the rest of the code is evaluated
// function expressions get evaluated later with the rest of the code
// function declarations DON'T  return a reference to a function rather, they create a variable with the name of the function and assign the new function to it
//  function expressions return a reference to the new function creted by the expression
// the process of invoking a function created by a declaration is exactly the SAME for one created with a function expression
// you can hold function references in variables
// function declarations are statements; function expressions are used in statements

//DIFFERENCES BETWEEN FUNCTION DECLARATION AND FUNCTION EXPRESSION
//function declarations are created and setup before the rest of the code gets evaluated; function expressions are created as the code executes at runtime
//naming: in function declaration,the function name is the variables that refers to the function; in function expression, noname is provided for the function, so the function is assigned to a variable or used in other ways

//functions are values too; the value is the reference to the function
//you can assign and reassign these references to other variables just like with any value <see examples below>
var winner = function () { //var winner here holds the reference to the function && || value of the function
    console.log("Winner!");
};

var k = winner; //var k has been assigned the reference to the function/value held by the variable winner
k(); //invoking k here is invoking the function above, same as saying; winner();

//think of functions as values; just like strings, numbers, booleans and objects. The difference with the rest values is that you can invoke functions