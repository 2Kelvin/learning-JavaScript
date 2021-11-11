// FUNCTIONS AS FIRST CLASSS VALUES
// First Class -> A value that can be treated like any other value in a programming language, including the ability to be assignes to a variable, passed as an argument and returned from a function
// Examples of FIRST CLASS VALUES: numbers, strings, booleans, objects and functions
// remember, think of functions as values too like the other value types: numbers, booleans, strings and objects
// a function reference is the value resulting from a function; it is a first class value
// Here's what you can do with first class values:
//-> Assign them to a variable/ store them in a data structure like an array or object
//-> Pass them to a function
//-> Return them from a function

// PASSING A FUNCTON TO A FUNCTION
var passengers = [
    { name: "Steph Curry", paid: true, ticket: "firstclass" },
    { name: "Klay Thompson", paid: true, ticket: "firstclass" },
    { name: "Andrew Wiggins", paid: false, ticket: "coach" },
    { name: "Draymond Green", paid: true, ticket: "firstclass" },
    { name: "James Wiseman", paid: true, ticket: "premium" },
    { name: "Tuscano Anderson", paid: true, ticket: "premium" }
];

function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    } return true;
}

function checkNoFlyList(passenger) {
    return (passenger.name === "Andrew Wiggins");
}
var allCanFly = processPassengers(passengers, checkNoFlyList); //to pass a function inside a function, just use the function's name as an argument
if (!allCanFly) {
    console.log("The plane can't take off: We have a passenger on the no-fly-list.");
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}
var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off. Not everyone has paid.");
}

function printPassenger(passenger) {
    //my code that also works(below)
    //  console.log("Passenger: " + passenger.name + " Paid: " + passenger.paid);
    var message = passenger.name;
    if (passenger.paid === true) {
        var message = message + " has paid";
    } else {
        message = message + " has not paid";
    }
    console.log(message);
    return false;
}
var allPassengers = processPassengers(passengers, printPassenger);

// RETURNING A FUNCTION FROM A FUNCTION
// a function's rule of thumb: a function should do one thing and do it really well

// flight attendant's code
function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    //get drink order
    getDrinkOrderFunction();
    // get dinner order
    getDinnerOrderFunction();
    // show movie
    getDrinkOrderFunction();
    // pick up trash

}

// function iterate through passengers
function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}
servePassengers(passengers);

// function order drinks
function createDrinkOrder(passenger) {
    var orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            console.log("Would you like a cocktail or wine?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function () {
            console.log("Would you like wine, a cola or water?");
        };
    } else {
        orderFunction = function () {
            console.log("Your choice is a cola or water");
        };
    }
    return orderFunction;
}

// function order dinner
function createDinnerOrder(passenger) {
    var yourOrderFunction;

    if (passenger.ticket === "firstclass") {
        yourOrderFunction = function () {
            console.log("Would you like chicken or pasta?");
        };
    } else if (passenger.ticket === "premium") {
        yourOrderFunction = function () {
            console.log("Would you like a snack box or cheese plate?");
        };
    } else {
        yourOrderFunction = function () {
            console.log("Would you like peanuts or pretzels?");
        };
    }
    return yourOrderFunction;
}