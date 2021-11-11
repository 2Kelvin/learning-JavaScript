window.onload = function () {
    var count = 0;
    var message = "You clicked me ";
    var div = document.getElementById("message");
    var button = document.getElementById("clickme");

    button.onclick = function () {
        count++;
        div.innerHTML = message + count + " times!";
    };
};
// once you click the button, the browser stores the new count value in the count variable and stores it in the environment
// (count value is updated as you click till you refresh the page then the count resets to its original value 0)
