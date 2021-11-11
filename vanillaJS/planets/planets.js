function init() {
    var planet = document.getElementById("greenPlanet");
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.setAttribute("class", "redText");

}

window.onload = init;