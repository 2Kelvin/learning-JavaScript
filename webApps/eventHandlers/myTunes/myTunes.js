window.onload = function () {
    var addSongBtn = document.getElementById("addSongBtn");

    addSongBtn.onclick = function () {
        var songTextInput = document.getElementById("songTextInput");
        // grab the song data from 'songTextInput'
        // to access the text the user typed in the textInput, use the "value" property of the textInput; it holds whatever is typed into the textInput
        var songName = songTextInput.value;

        // checking to see if the textInput value (songName) is empty -> "" means an empty string
        if (songName == "") {
            alert("Please enter a song name first");
        } else {

            // "creating a new li item" in the using JS
            var li = document.createElement("li");
            // setting the song filled in by user to the li element
            li.innerHTML = songName;
            // display the song as a list item in the <ul> with the id 'playlist' 
            var ul = document.getElementById("playlist");
            // adding the li element created to the DOM (as a child of ul) --> use ul's appendChild() method
            ul.appendChild(li);
            // saving the song in the browser's local storage
            save(songName);
        }
    }
    // loading saved playlist from the browser's local storage 
    loadPlaylist();
}