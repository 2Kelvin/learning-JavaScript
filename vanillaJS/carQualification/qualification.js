var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};
var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};
var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};
var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};
var bima = {
    make: "BMW",
    model: "E600",
    year: 1957,
    color: "white",
    passengers: 4,
    convertible: true,
    mileage: 711
};

worthALook(taxi);
worthALook(cadi);
worthALook(fiat);
worthALook(chevy);
worthALook(bima);

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

function worthALook(car) {
    var worthALook = prequal(car);
    if (worthALook) {
        console.log("You gotta check out this " + car.make + " " + car.model); 
    } else {
        console.log("You should really pass on the " + car.make + " " + car.model);
    }
}