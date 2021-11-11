// OBJECT LITERALS
// these are objects created by writing them out (manually typed objects)
// example
var duck = {
    type: "redheaded",
    duckColor: "white",
    feet: 2,
    canFly: false
};

// OBJECT CONSTRUCTORS || CONSTRUCTORS 
// A constructor is a function that returns an object| you define it once & invoke it every time you want to create a new object
// Constructor -->> little factory that can create an endless number of similar objects

// Creating|Using a constructor- 2 steps:
// 1] Define the constructor (like a function)
// 2] Use the constructor to create objects

// creating a constructor that creates dog objects with the 'name', 'breed' and 'weight' properties
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if (this.weight > 25) {
            console.log(this.name + " barks Woof!");
        } else {
            console.log(this.name + " barks Yip!");
        }
    };
}
// a constructor function looks just like a regular function
// use a starting capital letter for constructor name(not a must) ->devs do it like this (CONVENTIONAL METHODS) -->>also helps read code faster; which is a function & which is a contructor
// parameters of the constructor match the properties we want for each dog; their data passed will be saved in the properties in the body code
// each parameter is assigned to a property (body code)
// parameters are used to customize objects; their values initialize the properties of the object being cretaed
// let your property name and their respective parameter name match (CONVENTIONAL METHODS) 
// property name is the name after 'this', which is then assigned the value of the parameter
// we're not using variables like in most functions, INSTEAD we're using keyword 'this' 
// "var" declares variables, "this" creates new properties in an object

// computationally, you can do anything in a constructor you can do in a regular function
// eg) declare and use variables, use for loops, call other functions...
// however, DO NOT return a value (other than "this") from a constructor -> this will make the constructor not return the object it's suppossed to be constructing
// when creating objects using a constructor, DO NOT FORGET to use the keyword "new"
// if you don't use "new", a new object will never be created
// therefor, any rederences to this in your constructor won't refer to a new object but rather to the global object of your application which is the 'window object'
// the global object is the topmost-level object; where global variables are stored. In browsers, this object is the window object
// if you don't use "new" there's no object to return from the constructor
// therefore, the variable you tried to assign the object (wiyhout using 'new') will be undefined -> this leads to the "undefined error"
// TIP: if you're sing a constructor to create objects and those objects keep coming up undefined when you reference them, double check your code to make sure you're using a "new" operator with your constructor

// using the constructor Dog to create dog objects
var scooby = new Dog("Scooby-Doo", "Mixed", 40);
// the above code created a dog object named scooby: with the property name; Scooby-Doo, breed;mixed and weighs 40lbs 
// to create a new Dog object, (after initializing the variable) use the keyword "new" followed by calling the constructor wih the appropriate arguments 
// after the above code is evaluated, the variable initialized/used holds the reference to the new dog object 
// eg) variable 'scooby' holds a reference to the dog object scooby
// Examples below - creating other dog objects using the Dog constructor  
var simba = new Dog("Simba", "Normal-Dog", 35);
var fluffy = new Dog("Fluffy", "Poodle", 20);
var bolt = new Dog("Bolt", "Chihuahua", 24);
// by creating dog objects this way instead of using object literals; we know each dog has the same set of properties;name, breed and weight

var dogs = [scooby, simba, fluffy, bolt];
// array containing all the dog objects we created above

for (var i = 0; i < dogs.length; i++) {
    var size = "small";
    if (dogs[i].weight > 10) {
        size = "large";
    }
    console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
}

for (var i = 0; i < dogs.length; i++) {
    dogs[i].bark();
}

// HOW CONSTRUCTORS WORK
// to understand how constructors work; the key is in the keyword "new"
// the 1st thing new does is create a new empty object
// 2nd: "new" sets "this" to point to the new object(current object our code is dealing with)
// after setting up 'this', the Dog constructor function is called passing "Bolt", "Chihuahua" and 28 as arguments (etc for other dog examples)
// next: the body of the function is invoked. Dog constructor then assigns values passed to properties in the newly created 'this' object
// once the Dog constructor function has fully executed, the 'new' operator returns 'this'; a reference to the newly created object
// NOTE: 'this' is returned exclusively for you, so you don't have to manually return it in your code
// finally, the reference to the newly created object is then assigned to the variable bolt
// use "this" in a Constructor in order to access the object being constructed & add properties to the object

// PUTTING METHODS TO CONSTRUCTORS
// methods in properties are properties too, they just happen to have a function assigned to them
// just added a "bark method" in the Dog constructor -->> this.bark 

function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function () {
        if (this.ounces <= 80) {
            return "small";
        } else if (this.ounces > 80 && this.ounces <= 120) {
            return "medium";
        } else {
            return "large";
        }
    };
    this.toString = function () {
        return "You've ordered a " + this.getSize() + " " + this.roast + " coffee.";
    };
}

var houseBlend = new Coffee("House Blend", 81);
console.log(houseBlend.toString());

var darkRoast = new Coffee("Dark Roast", 136);
console.log(darkRoast.toString());

// Car constructor example
function Car(make, model, year, color, passengers, convertible, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = false;
    this.start = function () {
        this.started = true;
    };
    this.stop = function () {
        this.started = false;
    };
    this.drive = function () {
        if (this.started) {
            console.log(this.make + " " + this.model + " goes Vroom!! Vroom!!");
        } else {
            console.log("You need to start the engine first.");
        }
    };
}

var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);
var testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

var cars = [chevy, cadi, taxi, fiat, testCar];

for (var i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].stop();
}
// when calling a constructor, you have to get all the arguments exactly in the same order
// if you switch two variables, the code is syntactically correct but doesn't function correctly though bcoz you switched two variables
// if you leave out an argument/parameter value, errors occur
// having a Constructor witha lot of parameters can make it difficult to read and maintain
// writing code to call this constructor also becomes difficult-ish -->it can cause bugs if you forget the order of arguments or even miss filling in a value
// a fix for this is by using an object literal in place of the parameters
// take all your arguments, throw them in an object literal and pass that literal to your function
// this way, you pass all your values in one container (the literal object)
// by doing this, you also don't have to worry about matching the order of your arguments and parameters
// in the object literal, use the same property names used in the Constructor

// example
var bmwParameters = {
    make2: "BMW",
    model2: "X6",
    year2: 2015,
    color2: "black",
    passengers2: 4,
    convertible2: false,
    mileage2: 0
};
// creating the BMW with the Constructor by passing its object literal parameters
var bmw = new Car2(bmwParameters);
// creating a new Car Constructor coz this is only a method 2 of doing the same thing as Car above (you can chose to go with either/ use where necessary)
// for this to work, remove all parameters from the Car2 constructor and replace with one parameter "params"; for the object literal we're going to pass in
// then, in Car2 body code; for each refernce substitute the corresponding property from the object literal passed
// eg) from 'make' to 'params.make'
// the methods stay the same, no changes are made to them

function Car2(params) {
    this.make2 = params.make2;
    this.model2 = params.model2;
    this.year2 = params.year2;
    this.color2 = params.color2;
    this.passengers2 = params.passengers2;
    this.convertible2 = params.convertible2;
    this.mileage2 = params.mileage2;
    this.started2 = false;
    this.start2 = function () {
        this.started2 = true;
    };
    this.stop2 = function () {
        this.started2 = false;
    };
    this.drive2 = function () {
        if (this.started2) {
            console.log(this.make2 + " " + this.model2 + " goes Vroom!! Vroom!!");
        } else {
            console.log("You need to start the engine first.");
        }
    };
}

bmw.start2();
bmw.drive2();

// example using Dog and Car2 Constructors
var limoParams = {
    make2: "Webville Motors",
    model2: "limo",
    year2: 1983,
    color2: "black",
    passengers2: 12,
    convertible2: true,
    mileage2: 21120
};

var limo = new Car2(limoParams);
var limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);
console.log(limo.make2 + " " + limo.model2 + " is an " + typeof limo);
console.log(limoDog.name + " is an " + typeof limoDog);
// typeof returns the type of its operand -> a string, number, object, boolean, function...
// in the example above, it returns an object, though its not specific if the object is a dog or a car

// OBJECT INSTANCES -->> instanceof operator
// in JS, the "typeof" all objects is just "object"
// however, we can get more info about an object if we know the Constructor that created it
// calling a Constructor using the "new" operator creates a 'new instance of an object'
// eg) if you used the Car Constructor to create an object; informally (that object is a car) || formally (that object is an instance of a Car)
// we can inspect the Constructor that made an object using the "instanceof operator"
// Example
var subaruParameters = {
    make2: "Subaru",
    model2: "Evoke",
    year2: 2017,
    color2: "blue",
    passengers2: 4,
    convertible2: false,
    mileage2: 100
};

var subaru = new Car2(subaruParameters);

if (subaru instanceof Car2) {
    console.log("Subaru is an instance of a Car!");
};
// the result of instanceof is either "true" or "false"

// Example2: inspecting if 'simba is an instance of a Dog'
if (simba instanceof Dog) {
    console.log("Simba is definitely an instance of a Dog");
}

// from the above findings, the "new" operator does store information about the Constructor through which it created the object
// and that's how instanceof is able to determine if an object is an instance of a certain Constructor

// how to check if two objects were created using the same Constructor
console.log((simba instanceof Dog) && (scooby instanceof Dog));

// Example3 --> function catCatcher below returns true if the object passed to it is a cat (ie, created with the Cat Constructor) and false if it's not
function ratCatcher(obj) {
    if (obj instanceof Rat) {
        return true;
    } else {
        return false;
    }
}
// Cat Constructor
function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
// creating some cats
var smellyCat = new Cat("SMelly-Cat", "Siamese", 11);
var whiskers = new Cat("Whiskers", "Mixed", 14);
// Rat Constructor
function Rat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
// rat objects
var filthyRat = new Rat("FilthyRat", "normal-breed", 7);
var ratty = new Rat("Ratty", "normal-breed", 8);
// array of both cats and rats objects
var catsnRats = [smellyCat, whiskers, filthyRat, ratty];
console.log(typeof catsnRats);
// for loop sorting through tomNJerry array; getting the returned value from ratCatcher; diplaying the results
for (var i = 0; i < catsnRats.length; i++) {
    if (ratCatcher(catsnRats[i])) {
        console.log(catsnRats[i].name + " is a rat!!")
    }
}

// Therefore, eg) an object is a dog if it was created with a Dog constructor and vice versa is true
// an object created through an object literal is an instance of Object
// Object is the most generic kind of object Constructor in JavaScript

// CONSTRUCTED OBJECTS HAVING INDEPENDENT PROPERTIES
//constructed objects have the same properties and methods, they can also be altered in future to have their own unique properties 
// just like object literals, you can 'add' or 'delete' properties after the constructor object is created
// Example -->> using the Dog Constructor to create a new dog
var spikes = new Dog("Spikes", "German-Shephard", 45);
// adding a new prperty to dog 'spikes' above
spikes.owner = "Luke";
// deleting the weight property in dog 'spikes' above
delete spikes.weight;
// adding a method to 'spikes'
spikes.trust = function (person) {
    return (person === "Luke");
};
// the added and deleted propertiees & methods only apply to spikes only not all dogs
console.log(spikes)
// even after adding more independent properties & methods, the object is still an instance of the Constructor you used to construct it
// dog 'spikes' should still be an instance of a Dog
console.log(spikes instanceof Dog);

// JAVASCRIPT BUILT-IN OBJECT CONSTRUCTORS
// Examples: Date, Time, Text Patterns, new array perspectives
// you can create objects from these built in constructors and manipulate them however in your code
// their biggest advantages are their methods and properties you can use to manipulate your code/data

// DATE OBJECT CONSTRUCTOR
// creating an object 'now' from Date Constructor -->>> displays the current date and time
var now = new Date();
console.log(now);
// you can use the Date Constructor methods to manipulate dates|time or retrieve certain date/time properties
// returning a string representing the current date
var dateString = now.toString();
console.log(dateString);
// returning the year in the date
var theYear = now.getUTCFullYear();
console.log(theYear);
// returning the day of the week -> it reps rhis using numbers: 1 is for MOnday etc...
var theDayOfTheWeek = now.getDay();
console.log(theDayOfTheWeek);

// you can pass arguments to the Date Constructor  to represent a specific date & time of your choice
myBirthday = new Date("January 18, 1997");
// you can even include time if you wanted
console.log(myBirthday);

// ARRAY OBJECT CONSTRUCTOR
// you can create an array using the "Array Constructor" -> Array()
// [] is a shorthand for using the Array () Constructor 
var namesArray = new Array("Hahn", "John", "Maya", "Jones");
// adding new names to my namesArray
namesArray[4] = "Kai";
namesArray.push = "Jodice";
console.log(namesArray);
// creating an array of a specific size -->>2 in the eg below
var justNumbers = new Array(2);
justNumbers[0] = 19;
justNumbers[1] = 7;
console.log(justNumbers);
// reversing the order of an array
justNumbers.reverse();
console.log(justNumbers);
// the join method below places a "-" btwn the values then returns a string of the array -> its default separator is a comma
var aString = justNumbers.join(" - ");
console.log(aString);
// every method takes a function & tests each array value to see if the array returns true or false when called on that value
// if the function returns true for all the array items, then the result of the every method is true and vice versa is true
var allAreOdd = justNumbers.every(function (x) {
    return ((x % 2) !== 0);
});
console.log(allAreOdd);

// literal syntax array
var myLetters = ["a", "b", "c"];
// above code is same as code below
// if you pass more than one argument, the array the values you pass it
var myLettersConstructor = new Array("a", "b", "c");
console.log(typeof myLettersConstructor);
// you can use methods on either of the arrays above
// DIFFERENCE: the Constructor way is better when creating an array of a specific size that you determine at runtime and then add items to it later
// the Constructor way is better when you're creating an array programmatically

// OTHER JS BUILT-IN OBJECT CONSTRUCTORS
// MATH -->> not a Constructor or a function ->> just an object -->> doesn't use new 
// this object has properties & methods used for doing math stuff eg) Math.PI, Math.random()

// REGEXP
// use this object Constructor to create regular expression objects which allow you to search for simple and complex patterns in text

// ERROR
// this Constructor creates standard error objects that are useful in catching errors in your code

// exercise
function CarPrototype() {
    this.make = "Webville Motors";
    this.year = 2014;
    this.started = false;
    this.start = function () {
        this.started = true;
    };
    this.stop = function () {
        this.started = false;
    };
    this.drive = function () {
        if (this.started) {
            console.log("Vroom!! Vroom!!");
        } else {
            console.log("You need to start the engine first.");
        }
    };
}
// creating my car
var myModdedCar = new CarPrototype();
// customizing my car 
myModdedCar.convertible = true;
myModdedCar.colour = "Orange and Grey";
myModdedCar.type = "4WD";
myModdedCar.model = "Ford";
myModdedCar.passengers = 4;
myModdedCar.spoilers = true;
myModdedCar.stereo = true;

console.log(myModdedCar);
myModdedCar.start();
myModdedCar.drive();

// was curious to know! apparently an array is an object!