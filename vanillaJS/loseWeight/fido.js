var fido = {
    name: "Fido",
    weight: 48,
    breed: "Mixed",
    loves: "walks"
};

loseWeight (fido, 10);

function loseWeight(dog, amount) {
    dog.weight = dog.weight - amount;
}

console.log(fido.name + " now weighs " + fido.weight);
console.log(fido);