var song = {
    name: "Work Hard Play Hard",
    artist: "David Guetta ft Ne-Yo",
    minutes: 3,
    seconds: 40,
    genre: "EDM",
    playing: false,
    play: function() {
        if (!this.playing) {
            this.playing = true;
            console.log("Playing " + this.name + " by " + this.artist);
        }
    },
    pause: function() {
        if (this.playing) {
            this.playing = false;
        }
    }
};

song.play();
song.pause(); //figure out why it's not pausing