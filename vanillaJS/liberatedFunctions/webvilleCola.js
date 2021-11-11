// SORTING DATA
var products = [
    { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
    { name: "Orange", calories: 160, color: "orange", sold: 12101 },
    { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
    { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
    { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
    { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
    { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
    { name: "Water", calories: 0, color: "clear", sold: 62123 }
];

// array sort method -> given a function that compares two items in an array, the sort method sorts the array for you
// sort method warm-up example 
var numbersArray = [60, 50, 62, 58, 54, 54];

/*function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return -1;
    }
}*/

// reduced code that does the same thing as the above commented out function
function compareNumbers(num1, num2) {
    return num1 - num2;
}

// sorting the numbers in an ascending order (smallest to largest)
numbersArray.sort(compareNumbers);
console.log(numbersArray);

// the sort method requires you to make a code that compares two items in the array, so that it can go ahead and sort the array
// the two item comparison has to return a value of 0 (both items equal), 1/greater than 0 (item1 greater than item2) or -1/less than 0 (item1 less than item2)
// the sort method is destructive; changes the array rather than returning a new array that is sorted 
// sort method ascending order logic: if 1/greater than 0 (place the first item after the second item), if 0 (items equal; leave them in place) and if -1/less than 0 (place the first item before the second item)

// sort method descending order; invert the above logic <just change num2 to come before num1>
/*function compareNumbers(num1, num2) {
    if (num2 > num1) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return -1;
    }
}*/

/*function compareNumbers(num1, num2) {
    return num2 - num1;
}

numbersArray.sort(compareNumbers);
console.log(numbersArray);*/

// webvilleCola sorting products by the number of bottles sold (ascending order)
//since products is an array containing objects with properties, we pass two objects colaA and colaB as arguments, then compare their sold properties

// longer compareSoldDescending function
/*function compareSoldDescending(colaA, colaB) {
    if (colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1;
    }
}*/

function compareSoldDescending(colaA, colaB) {
    return colaB.sold - colaA.sold;
} // to printProducts in ascending order; just replace to: return colaA.sold - colaB.sold;

// function to print out the products ***for some reason, the console.log displays wrong sorting on the compareName and compareColor but this function prints out the sorted data correctly 100% of the time
function printProducts(products) {
    for (var i = 0; i < products.length; i++) {
        console.log("Name: " + products[i].name + ", Calories: " + products[i].calories + ", Color: " + products[i].color + ", Sold: " + products[i].sold);
    }
}

products.sort(compareSoldDescending);
console.log("Products sorted by number of bottles sold");
printProducts(products);

// sorting webVille Cola's products by calories in ascending order
function compareCalories(colaA, colaB) {
    return colaB.calories - colaA.calories;
}

products.sort(compareCalories);
console.log("Products sorted by number of calories");
printProducts(products);

//sorting webville Cola's products by name
// JavaScript compares strings alphabetically with <, > and == (you can then sort the names in descending or ascending order)
// why is the minimized; return colaA.name - colaB.name sorting this data incorrectly??
function compareName(colaA, colaB) {
    if (colaA.name > colaB.name) {
        return 1;
    } else if (colaA.name === colaB.name) {
        return 0;
    } else {
        return -1;
    }
}

products.sort(compareName);
console.log("Products sorted by name");
printProducts(products);

// sorting webville Cola's products by color
// JavaScript compares strings alphabetically with <, > and == (you can then sort the colors in descending or ascending order)
// this too!!! why is the minimized; return colaA.color - colaB.color sorting this data incorrectly?? Is it because they're strings???
function compareColor(colaA, colaB) {
    if (colaA.color > colaB.color) {
        return 1;
    } else if (colaA.color === colaB.color) {
        return 0;
    } else {
        return -1;
    }
}

products.sort(compareColor);
console.log("Products sorted by color");
printProducts(products);

// when sorting different objects, objects are compared based on their properties