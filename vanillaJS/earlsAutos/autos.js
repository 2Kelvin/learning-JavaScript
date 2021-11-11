function findCarInLot(car) {
    for (var i = 0; i < lot.length; i++) {
        if (car === lot[i]) {
            return i;
        }
    }
    return -1;
}

var chevy = {
    make: "Chevy",
    model: "Bel Air"
};

var taxi = {
    make: "Webville Motors",
    model: "Taxi"
};

var fiat1 = {
    make: "Fiat",
    model: "500"
};

var fiat2 = {
    make: "Fiat",
    model: "500"
};

var lot = [chevy, taxi, fiat1, fiat2];

var lot1 = findCarInLot(fiat2);
var lot2 = findCarInLot(taxi);
var lot3 = findCarInLot(chevy);
var lot4 = findCarInLot(fiat1);

console.log("The car is in lot number: " + lot1);
console.log("The car is in lot number: " + lot2);
console.log("The car is in lot number: " + lot3);
console.log("The car is in lot number: " + lot4);