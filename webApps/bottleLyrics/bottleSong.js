window.onload = function () {
    var drink = "CocaCola";
    var lyrics = "";
    var bottles = 99;

    while (bottles > 0) {
        lyrics = lyrics + bottles + " bottles of " + drink + " on the wall <br>";
        lyrics = lyrics + bottles + " bottles of " + drink + " on the wall <br>";
        lyrics = lyrics + " Take one down, pass it around, <br>";

        if (bottles > 1) {
            lyrics = lyrics + (bottles - 1) + " bottles of " + drink + " on the wall <br>";
        } else {
            lyrics = lyrics + "No more bottles of " + drink + " on the wall <br>";
        } bottles = bottles - 1;
    }
    document.write(lyrics);
}