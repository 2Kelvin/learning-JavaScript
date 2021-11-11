window.onload = function () {
    function Movie(title, genre, rating) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
    }

    var outerSpace = new Movie("Outer Space", "Thriller", 2);
    // NOTE: you can also add a "showtimes property" in the Movie Constructor...then pass the array values when creating a new movie
    outerSpace.showtimes = new Array("12:51 pm", "3:00 pm", "11:00pm");
    // showing next movie showtime
    Movie.prototype.getNextShowing = function () {
        var now = new Date().getTime();

        for (var i = 0; i < this.showtimes.length; i++) {
            var showtime = this.getTimeFromString(this.showtimes[i]);
            if ((showtime - now) > 0) {
                return "Next showing of " + this.title + " is " + this.showtimes[i];
            }
        }
        return null;
    }
    // converting the time to integers
    Movie.prototype.getTimeFromString = function (timeString) {
        var theTime = new Date();
        var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
        theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
        theTime.setMinutes(parseInt(time[2]) || 0);
        return theTime.getTime();
    }

    var forbiddenPlanet = new Movie("Forbidden Planet", "Sci-Fi", 5);
    forbiddenPlanet.showtimes = ["12:47 pm", "9:00 pm"];

    alert(outerSpace.getNextShowing());

    alert(forbiddenPlanet.getNextShowing());
}