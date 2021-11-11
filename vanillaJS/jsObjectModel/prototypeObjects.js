// JAVASCRIPT OBJECT OREIENTED MODEL
// **JS doesn't have the classical object oriented model where you create objects from classes (like in Java or C++)
// **JS doesn't have classes at all (check the new changes to JS if it has classes)
// in JS, object inherit behavior from other objects -> this is called "Prototpical Inheritance" (ie. inheritance based on prototypes)
// remember the Dog object Constructor we used to create dog objects (in file/advancedObjects) it made it easier to reuse code
// however, it's not an efficient method since it created a replicate of the function bark in every dog object created
// this can lead to the browser running out of memory if say a lot of dog objects were created and each replicating the Dog Constructor's method(s)
// PS am just using Dog Constructor as an example; this is the same behavior to any Constructor you'll create
// generally, you don't want a new set of methods being created evry time you create an object using a Constructor
// this hurts your application performance and your computer resources. This is even worse on mobile devices
// the above issue can be solved using JS object model which is based on prototypes
// it entails creating objects that are extensions of other objects ie) prototype objects

// PROTOTYPES
// JavaScript objects can inherit behavior from other objects
// JavaScript uses "prototypical inheritance"
// the object you're inheriting behavior from is called the "prototype"
// prototypical inheritance use -> to inherit & reuse existing properties|methods while extending those properties in your new object
// when an object inherits from another object, it gains all its methods and properties
// Example ->> inheritance from a dog object prototype
// PS only properties and methods common to all dogs go inside the dog prototype; individual dog properties go to the dog instances - like name, breed, weight.. (coz they're different for each dog)
// through inheritance, when you call a method like bark() that isn't in the object instance, you check the prototype for the called method
// if all dog instances inherit from the dog property, means there is only 1 eg) berk method created hence making our code more efficient

// OVERRIDING THE PROTOTYPE
// just coz you inherit a method|property from  a prototype doesn't mean you're stuck with it
// you can always override properties & methods by supplying them in the object instance
// this works bcoz JS always looks for properties & methods in the object instance first before looking in the object prototype
// so if you want to use a custom bark() method, all you have to do is create it in the object instance and it will override the bark() in the prototype
// if JS finds the property|method in the object instance eg) bark() it invokes/uses that and doesn't bother looking in the prototype
// the custom bark() will be available ONLY to that object instance, the other object instances still use the prototype's bark()

// HOW TO USE/CREATE A PROTOTYPE
// all Constructors have a built in property called "prototype" that holds a reference to the actual prototype
// how to use it: -> Constructor.property
// Example ->> Dog.prototype
// in JS functions & Constructors are objects: that's why you are able to use the property 'prototype' on the Constructor
// just about everything in JS is an object, even arrays, as we figured out in the last chapter
// Basically functions || Constructors can have properties
// Constructors always have a prototype property

// USING THE CONSTRUCTOR'S PROTOTYPE
// Example) you can access the "dog prototype object" through the Dog Constructor's "prototype" property
// however the prototype object (Dog.prototype) is empty, you have to put in your own properties and methods to the prototype
// typically creating & adding properties and methods to a prototype object is done 1st before using the constructor

// the Dog Constructor -->>used to create instances of dogs with unique names, breed and weight
// no methods inserted here, so as to make our code more efficient and easier on our applications and gadgets
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

// setting up the dog prototype object ->> with shared property:species & methods: bark(), run() & wag()
// Dog.prototype is a reference to a dog object with the property; 'species' and methods: bark(), run() & wag()
Dog.prototype.species = "Canine";
// all dogs start by not sitting
Dog.prototype.sitting = false;
Dog.prototype.bark = function () {
    if (this.weight > 25) {
        console.log(this.name + " says Woof Woof");
    } else {
        console.log(this.name + " says Yip Yip");
    }
}

Dog.prototype.run = function () {
    console.log(this.name + " is running");
}

Dog.prototype.wag = function () {
    console.log(this.name + " is wagging the tail");
}

// last minute sit method add...
Dog.prototype.sit = function () {
    if (this.sitting) {
        console.log(this.name + " is already sitting");
    } else {
        // setting "sitting =true" overrides the prototype's sitting property, therfore sets the value of "this.setting" in the object instance to "true"
        // ie) the object instance now has its own local sitting property that's set to true
        // from here on out, if this object instance's"sitting" is used needed anywhere, it'll use the local property sitting in the object not in the ptototype 
        this.sitting = true;
        console.log(this.name + " is now sitting");
    }
}

// creating new dog objects/ dogs/ instances of a Dog
var scooby = new Dog("Scooby-Doo", "Mixed", 42);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 15);

// overriding the prototype to give fluffy a custom bark
fluffy.bark = function () {
    console.log(this.name + " says Meeeeeeooooooowwwwww");
}

// calling the dogs' methods stored in the dog prototype
// each dog inherits the methods from the prototype -> except fluffy's bark which is custom (since we did override the prototypes bark() on it)
scooby.bark();
scooby.run();
scooby.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();
spot.sit();
// console.loggging(spot) to see if the new property sitting has been created inside it & given the value "true"
console.log(spot);
// when I call spot.sit again to confirm this; you can see that sitting is already set to true -> spot is already sitting
spot.sit();
// this.name in the bark() in the prototype works bcoz: when you call an object's method, this is set to the object whose method was called
// this still apllies even if the method called isn't found in the object rather in its prototype

// SETTING UP A CHAIN OF PROTOTYPES
// YOU CAN HAVE MORE THAN ONE PROTOTYPE IN JAVASCRIPT
// you can set up a chain of prototypes that your object inherits from

// adding an extra ShowDog prototype for show-dogs that will be using the Dog Constructor and the dog prototype
// Dog.prototype -> contains general properties & methods that any dog has >> bark(), run(), wag()...it's a "Canine" species....
// ShowDog.prototype -> contains special behaviors that normal dogs don't have >> stack(), gait(), bait(), groom()

// HOW INHERITANCE WORKS IN A PROTOTYPE CHAIN
// if you don't find a property|method in the ShowDog instance, then it must be inherited from the ShowDog.prototype or Dog.prototype
// when creating dog.prototype (we didn't have to add extra code); there was an empty object automatically supplied by the Dog Constructor's prototype property; so all we had to do was add properties & methods to it so that our dogs/dog instances could inherit from
// with showdog prototype, we need to add some code in order to have a prototype object (showdog prototype) inheritinf from another prototype object(dog prototype)
// we need to create an object that inherits from the dog prototype (create a dog instance) and then wire the 2 prototypes together (assign the showdog prototype to the new dog instance created)
// we need: a show dog prototype (inheriting from the dog prototype), a Showdog Constructor & showdog instances/showdogs that inherit from the showdog prototype 

// STEP 1 - >> creating a ShowDog Constructor (to be used to create showdogs)
// its parameters were similar to that of Dog from which its prototype inherits from; that's why the code is used like this to duplication & repetition of code
// we're relying on the code from the Dog COnstructor to handle assigning the name, breed and weight properties
// the "Dog.call()" statement reuses the Dog Constructor code that processes the name, breed & weight
// the handler is tackled on itself since the Dog Constructor doesn't have it
// Dog.call invokes the Dog Constructor function & passes it the object to use as this, alongside all the Dog function arguments
// remember: in creating a new object using ShowDog Constructor, the "new" operator makes a new, empty object and assigns it to the variable this in the body of ShowDog
// we use the call method instead of calling Dog directly so as to control what the value of "this" is (this=ShowDog instance created)
// basically, we're calling the Dog Constructor function and telling it to use our ShowDog instance created as "this"
// so, the Dog Constructor function will set the name,breed & weight properties into our ShowDog object
// the "this" object created by "new" for ShowDog gets used as "this" in the body of the Dog
// therefore "this" is a ShowDog object not a Dog object
// the 3 properties(name, breed & weight) are assigned to "this" by the code in the Dog Constructor function
function ShowDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}

// STEP 2 - >> Connecting the Showdog prototype to the Dog prototype so that it inherits its properties & methods
// >to do this, create a dog instance/dog using the Dog Constructor and assign that to the ShowDog prototype
// basically, ShowDog is an object instance of the Dog Constructor, meaning it inherits all the properties & methods of the Dog.prototype
// don't pass any arguments when creating this object (we don't need them), all we require is the new object to inherit dog.prototype properties and methods
// the key >>> ShowDog.prototype is a Dog instance/ dog object
ShowDog.prototype = new Dog();

// STEP 3 - >> Adding additional properties & methods (to the ShowDog.prototype) for our showdogs 
// generally, the showdog.prototype inherits all the dog.prototype properties & methods and all the 'additional' showdog.prototype methods and property
// therefore, we say that the showdog.prototype "extends" the dog prototype: ie) it inherits its (dog.prototype) properties & extends it with new ones
ShowDog.prototype.league = "Webville";

// fixing the ShowDog instances showing that their constructor is Dog instead of ShowDog
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.stack = function () {
    console.log(this.name + "stacking");
}

ShowDog.prototype.bait = function () {
    console.log(this.name + "is bait");
}

ShowDog.prototype.gait = function (kind) {
    console.log(this.name + " is " + kind + "ing");
}

ShowDog.prototype.groom = function () {
    console.log(this.name + "is grooming");
}

// STEP 4 ->> creating showdogs (using the Showdog Constructor)
// these showdogs will have the showdog.prototype properties and also inherit dog.prototype properties
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Mark");
var puffy = new ShowDog("Puffy", "Mixed", 22, "Kevo");
var beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Jessica");
// console logging my showdogs 
scotty.stack();
scotty.wag();
puffy.bait();
puffy.bark();
console.log(scotty.species);
console.log(puffy.league);
beatrice.bark();
beatrice.gait("Walk");
puffy.groom()

// testing the dog objects' instances
// this returns true
if (scooby instanceof Dog) {
    console.log("Scooby is a Dog");
}
// this returns false ->> bcoz scooby doesn't inherit any showdog prototype properties
if (scooby instanceof ShowDog) {
    console.log("Scooby is a ShowDog");
}
// this returns true
if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
}
// this returns true too ->> bcoz scotty inherits both the dog prototype and showdog prototype properties
// so scotty is a dog and a showdog
// instanceof takes into account all the objects you inherit from
if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
}
// testing out the dog instance's Constructors
// both display that they were created using the Dog Constructor
// makes sense for "scooby" but why "scotty"??
// it's inheriting it from the dog prototype
// it's a loose end that can be taken care of; by explicitly assigning the showdog prototype's constructor property the value ShowDog; (as done above in ShowDog.prototype properties)
// you can use the "constructor" property on objects to know their COnstructor
console.log("Scooby's constructor is " + scooby.constructor);
console.log("Scotty's constructor is " + scotty.constructor);


// Robot prototype example
// Robot Constructor
function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}
// Robot prototype object
Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.speak = function () {
    console.log(this.name + " is speaking...");
}
Robot.prototype.makeCoffee = function () {
    console.log(this.name + " is making coffee..");
}
Robot.prototype.blinkLights = function () {
    console.log(this.name + " is blinking lights.");
}
// creating robots/robot objects/instances of a robot
var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");
// extra & overriding methods in the robots 
robby.onOffSwitch = true;
robby.makeCoffee = function () {
    console.log("Robby is running to Starbucks to get coffee");
}
rosie.cleanHouse = function () {
    console.log("Rosie is cleaning the house");
}

// space-robots Constructor
// similar to the Robot Constructor only with an extra "homPlanet" property
// check notes on ShowDog Constructor
function SpaceRobot(name, year, owner, homePlanet) {
    Robot.call(this, name, year, owner);
    this.homePlanet = homePlanet;
}
// connecting the spacerobot prototype to the robot prototype; for spacerobots to inherit basic robot properties <chaining prototypes>
SpaceRobot.prototype = new Robot();
// see notes on Showdog.prototype.constructor
SpaceRobot.prototype.constructor = SpaceRobot;
// adding extra methods for spacerobots
SpaceRobot.prototype.speak = function () {
    console.log(this.name + " says, Sir, if I may venture an opinion...");
}
SpaceRobot.prototype.pilot = function () {
    console.log(this.name + " says Thrusters?? Are they important?");
}
// creating some spacerobots
var c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
var simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
// testing out my spacerobots if they work...if the prototype chaining works as well
c3po.speak();
c3po.pilot();
console.log(c3po.name + " was made by " + c3po.maker + " and owned by " + c3po.owner);
simon.makeCoffee();
simon.blinkLights();
simon.speak();

// testing out my code
console.log(robby.name + " was made by " + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();
console.log(rosie.name + " was made by " + rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();

// if you add more properties|methods to a prototype even after object instances have already been created, there's no problem at all
// the object instances immediately and automatically get these new properties|methods(behaviors)
// once you add a method|property to a prototype, any objects inheriting from that prototype can use that property|method
// same goes for changing any property in the prototype; all objects inheriting from this prototype are also affected

// example 3
// Game Constructor
function Game() {
    this.level = 0;
}
// game prototypes
Game.prototype.play = function () {
    // player plays game here
    this.level++;
    console.log("Welcome to level " + this.level);
    this.unlock();
}

Game.prototype.unlock = function () {
    // checking if conditions met (level 42) to unlock the laser beam
    if (this.level === 42) {
        // create a deployLaser() method to the player prototype
        // apparently you can create prototype methods anywhere; even inside other prototype methods
        Player.prototype.deployLaser = function () {
            console.log(this.name + " is blasting you with laser beams!!");
        }
    }
}

// Player Constructor
function Player(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// creating a new game (object) and new players (objects)
var game = new Game();
var player1 = new Player("Player1", 17, "Male");
var player2 = new Player("Player1", 14, "Female");

// continue playing if level !==42
while (game.level < 42) {
    game.play();
}

player1.deployLaser();
player2.deployLaser();

// hasOwnProperty() method -->> determines if the property you're using is in the object's instance or the prototype
// every object has the hasOwnProperty method you can use
// the property you're looking for goes in hasOwnProperty's bracket & put inside double quotes (ie. passed as a string)
// this method returns true if a property is defined in an object instance
// if the property is not in the object instance but you can access it, you then know that it has to be defined in the prototype
console.log(scooby.hasOwnProperty("species"));
console.log(fluffy.hasOwnProperty("breed"));
console.log(spot.hasOwnProperty("sitting"));
console.log(fluffy.hasOwnProperty("sitting"));
// NOTE: an object gets its own localproperty if the property in the prototype is overridden

// for your code to work properly, you should chain your prototypes immediately after creating a Constructor then add the extensive properties to your prototype
// any changes you make in the prototypes will be reflected in your instances even those inheriting from the prototype no matter the number of prototype chaining in your code
// if you wanted to create a new prototype chain to ShowDog & Dog; maybe CompetitionDog, you'll just assign "CompetitionDOg.prototype" the value of a new "ShowDog instance" 
// notice the object instance assigned to CompetitionDog's prototype is ShowDog's and not Dog's bcoz ShowDog already inherits from the Dog prototype, so you're just extending this inheritance
// this way the CompetittionDOgs will have their exclusive properties + ShowDog properties + Dog properties >>see example below
function CompetitionDog(name, breed, weight, trained) {
    Dog.call(this, name, breed, weight);
    this.trained = trained;
}
// make sure to assign its constructor property
CompetitionDog.prototype.constructor = CompetitionDog;
// inheriting properties from ShowDog and Dog
CompetitionDog.prototype = new ShowDog();
// extending its own properties
CompetitionDog.prototype.win = function () {
    console.log(this.name + " can win the tornament");
}
CompetitionDog.prototype.lose = function () {
    console.log(this.name + " can lose the tornament");
}

var dougie = new CompetitionDog("Dougie", "Chihuahua", 52, true);
console.log(dougie.species);
dougie.win();
dougie.bark();
dougie.gait("jump");
dougie.run();

// if your CompetitionDog just wanted to inherit Dog properties "only" >> CompetitionDog.prototype = new Dog();

// END OF THE CHAIN
// eg) in the Dog and ShowDOg object chaining, you would think that Dog is the end of the chain, but it's not; Dog has its own prototype -> Object 
// Object is the default end of every prototype chain youll ever create (if you don't manually change it)
// the default prototype for any object instance you create is Object

// OBJECT
// it's the object that all objects ultimately inherit from
// it has a few key methods that are a core part of the JavaScript Object System
// eg 1) "hasOwnProperty()" ->> its inherited by every object...see how to use it above...checks if an object locally has its own property or is just inheriting it
// eg 2) "toString" ->> inherited by every object ...returns a string representation of any object ->>it's commonly overridden by instances

// OBJECT AS A PROTOTYPE
// every object created in JavScript has a prototype, and its Object
// all prototype chains eventually lead to Object

// USING INHERITANCE & OVERRIDDING BUILT-IN BEHAVIOR
// if you're inheriting from a built in object like Object, you can override the methods in those objects eg) the toString() method

// USING THE toString() method
// eg> displaying the robot object 'rosie' in the console using toString()
// doesn't do a very good job as you can see in the console...that's why we're gonna customize (override) it
console.log(rosie.toString());

// CUSTOM toString()
// making a custom toString() specifically for the Spacerobot objects >> you can do this for any objects you want
// in real code, put this code where your the rest of your prototype code is 
SpaceRobot.prototype.toString = function () {
    // JS automatically uses toString() to convert the objects to strings then concatenate them with the other string
    return this.name + " belongs to " + this.owner;
}
console.log(c3po.toString());

// when using '+' operator to concatenate an object and a string together, JS automatically uses (without you calling it) the toString() to convert the object to a string before concatenating it with the other string 
// don't get carried away overridding built in object's properties & methods
// this could affect the behavior of other code relying on those built-in properties & methods to do certain things

// PROPERTIES/ METHODS NOT TO OVERRIDE
//  constructor ->> points to the Constructor of the object
// hasOwnProperty
// isPrototypeOf ->> method used to find out if an object is a prototype of another object
// propertyIsEnumerable ->> checks to see if a property can be accessed by iterating thro all the object's properties

// PROPERTIES/METHODS YOU CAN OVERRIDE
// toString()
// toLocaleString() -> it's just like toString() though made to be overridden to provide a localized string (for your country/language) about an object
// valueOf() -> gives you the object you call it on. Can be overridden to return another value 

// USING INHERITANCE TO EXTEND A BUILT IN OBJECT'S PROPERTIES & METHODS
// make sure the name you give your custom object method doesn't conflict with an existing method in the object
// the Array built in object is not designed to be extended
// remember, by adding new properties to a prototype, you add new functionalities to objects inheriting from that object's prototype; you can do this too (add properties) to built in object's prototype
// Note! strings also have an object form. JS converts a string to an object whenever necessary
// the String object has methods eg) .substring(), .indexOf()...
// you can create your own custom method for the String Object like this..
// our custom method is called "cliche()"
String.prototype.cliche = function () {
    // an array of cliche words to look out for
    var cliche = ["I miss you too", "I'll call you ", "It's not you, it's me"];
    // iterating thro the passed string looking for the cliche words in the clicheArray
    for (var i = 0; i < cliche.length; i++) {
        // indexOf finds any matching words in the string to our clicheArray words & returns the index of our cliche word in the string(ie. which position in the array is the cliche word located at)
        // "this" is the string we pass our method cliche()
        var index = this.indexOf(cliche[i]);
        if (index >= 0) {
            return true;
        }
    }
    return false;
};
// testing our new String.cliche() method
var sentences = ["Same here, I miss you too", "Hey, where you at?", "Yes, I'll call you tomorrow, I promise", "I want a break-up. It's not you, it's me"];

for (var i = 0; i < sentences.length; i++) {
    var phrase = sentences[i];
    if (phrase.cliche()) {
        console.log("CLICHE ALERT!: " + phrase);
    }
}

// Example 2: custom String.palindrome()
String.prototype.palindrome = function () {
    // getting the number of characters in the string passed/ getting the length of the string
    // this refers the string passed
    var len = this.length - 1;
    // iterating over each character in the string & testing to see if the character at "i" is the SAME as the character at "len-i"(the character at the other end)
    for (var i = 0; i <= len; i++) {
        if (this.charAt(i) !== this.charAt(len - i)) {
            return false;
        }
        if (i === (len - i)) {
            return true;
        }
    }
    // if we get to where "i" is in the middle of the string(above true if()) or we get to the end of the loop, we return true bcoz we've got a palindrome
    return true;
};

// some words to test
var randomWords = ["eve", "kayak", "wow", "dance", "bob", "mom", "pap", "match"];
// iterating through each word in the array and testing it with our palindrome() method; which is possible because all words are strings(remember palindrome() is a string method)
for (var i = 0; i < randomWords.length; i++) {
    var oneWord = randomWords[i];

    if (oneWord.palindrome()) {
        console.log("'" + oneWord + "' is a palindrome");
    } else {
        console.log("'" + oneWord + "' is NOT a palindrome");
    }
}

// precise code to check if a word is a palindrome just like code above
// String.prototype.palindrome = function () {
//     var x = this.split("").reverse().join("");
//     return (x === this.valueOf());
// }

// JAVASCRIPT LANGUAGE SUMMARY
// Everything in JavaScript is an "object"
// even functions are objects, as you can see from the function example below
function meditate() {
    console.log("Everything is an object...");
}
if (meditate instanceof Object) {
    alert("Functions are objects too");
}
// just like objects, functions can: be assigned to variables, passed as arguments, retuned from functions and even have properties -> Constructor functions eg Dog.constructor
// you can even add properties to a function if you want; just like you can to Constructor functions
// a method is just a "property" in an object  "set to an anonymous function expression"
// JavaScript's power comes from using functions and objects as first class values