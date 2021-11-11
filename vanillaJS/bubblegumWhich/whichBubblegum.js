var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubblegum = [false, false, false, true];

for (var i = 0; i < hasBubblegum.length; i++) {
    if (hasBubblegum[i]) {
        console.log(products[i] + " contains bubblegum");
    }
}

