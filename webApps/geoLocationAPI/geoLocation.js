window.onload = function () {
    // wickedly smart coords
    var wickedlySmartCoords = {
        latitude: 47.624851,
        longitude: -122.52099
    };

    // checking to see if the browser supports the geolocation API
    if (navigator.geolocation) {
        // the anonymous function passed in the getCurrentPosition() method is what gets our location
        navigator.geolocation.getCurrentPosition(function (position) {
            // this is our successHandler argument
            // the position passed contains the latitude & longitude of your location and some accuracy info
            // the "position object" is passed by the geolocation API
            // position object contains a "coordinates object" that holds the latitude & longitude of your location
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            // displaying our location to the div in the html page
            var div = document.getElementById("location");
            div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
            // displaying the accuracy of our geolocation
            div.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";

            // passing our coords & those of wickedly Smart in order to calculate the distance between
            var km = computeDistance(position.coords, wickedlySmartCoords);
            var distance = document.getElementById("distance");
            distance.innerHTML = "You are " + km + " km from the Wickedly Smart HQ";
            // displaying our location using google maps
            showGoogleMap(position.coords);
        }, function (error) {
            // this is our errorHandler argument
            // our error object's "code property" containing errors numbered 0-3 >> each number associates with an error message
            var errorTypes = {
                0: "Unknown error",
                1: "Permission denied by user",
                2: "Position is not available",
                3: "Request timed out"
            };
            // accessing each individual error using error.code property
            var errorMessage = errorTypes[error.code];
            if (error.code == 0 || error.code == 2) {
                // error.message property contains extra information about the error, so we add that to our pre-existing errorMessage string
                errorMessage = errorMessage + " " + error.message;
            }
            // display the error in the div element in theHTML page
            var div = document.getElementById("location");
            div.innerHTML = errorMessage;
        });
    } else {
        alert("Oops, no geolocation support");
    }

    // calculating the distance between two places/ coordinates on earth
    function computeDistance(startCoords, destinationCoords) {
        var startLatitudeRadians = degreesToRadians(startCoords.latitude);
        var startLongitudeRadians = degreesToRadians(startCoords.longitude);
        var destinationLatitudeRadians = degreesToRadians(destinationCoords.latitude);
        var destinationLongitudeRadians = degreesToRadians(destinationCoords.longitude);
        // earth's radius in km
        var Radius = 6371;
        var distance = Math.acos(Math.sin(startLatitudeRadians) * Math.sin(destinationLatitudeRadians)
            + Math.cos(startLatitudeRadians) * Math.cos(destinationLatitudeRadians)
            * Math.cos(startLongitudeRadians - destinationLongitudeRadians)) * Radius;
        return distance;
    }

    function degreesToRadians(degrees) {
        var radians = (degrees * Math.PI) / 180;
        return radians;
    }

    // displaying a google map
    var map;

    function showGoogleMap(coords) {
        // getting your location through the google maps Constructor/ picking your coords & transforming them into google map coords (google map coords object)
        var googleLatitudeAndLongitude = new google.maps.LatLng(coords.latitude, coords.longitude);
        // options to customize how or map is created
        var googleMapOptions = {
            zoom: 10,
            center: googleLatitudeAndLongitude,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        // displaying the map
        var googleMapDiv = document.getElementById("googleMap");
        // the Map Constructor passes/takes an element & options and then creates & returns a map (object)
        map = new google.maps.Map(googleMapDiv, googleMapOptions);
        // code for google pins/markers
        var title = "Your Location";
        var content = "You are here: " + coords.latitude + ", " + coords.longitude;
        googleMarker(map, googleLatitudeAndLongitude, title, content);
    }

    // creating a Google Maps marker/ pin
    function googleMarker(map, latlong, title, content) {
        var markerOptions = {
            position: latlong,
            map: map,
            title: title,
            clickable: true
        };
        var marker = new google.maps.Marker(markerOptions);

        var infoWindowOptions = {
            content: content,
            position: latlong
        };
        var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

        google.maps.event.addListener(marker, "click", function () { infoWindow.open(map); });
    }
};

// "geolocation" is a property of the "navigator" object
// "navigation.geolocation" is what contains the entire geolocation API
// APIs are just objects with properties & methods
// the main method the API supports to fetch the user's/browser's location is the "getCurrentPosition() method"
// getCurrentPosition has 3 parameters (successHandler, errorHandler, options)
// successhandler() function is called if the browser successfully determines your location
// errorHandler() functio is called if something goes wrong & the browser cannot determine your location
// the options parameter allows you to customize the way geolocation works
// NOTE: "errorHandler" & "options" are optional 
// ->> in the code above, 2 anonymous functions have been passed to getCurrentPosition() as arguments: 
// ->>>the first is for the successHandler parameter & the second is for the errorHandler parameter
// if your geolocation API encounters an error, it passes an error object to your errorHandler
// the error object contains a numeric code describing the reason it couldn't determine the location of your browser
// depending on the code, the error object could also provide a message giving further information about the error
// error 0 is the catchall error - used if it's none of the other errors...
// ...to get more info on errors falling in 0, check the info given in error.message property to know more about the error 
// you can get more info from error.message on error 2 also
// geolocation has an internal timeout setting, if exceeded before location is determined, causes error 3; 
// you can customize this timeout using the "options" parameter in getCurrentPosition() method
// geoLocation doesn't provide you with tools to visualize your location, that's why I used Google maps

// geolocation has 3 methods: getCurrentPosition(), watchPosition() & clearWatch()
// position & coordinates are some objects mainly passed in getCurrentPosition()
// coordinates is also a property of position >>> position.coords
// position also has another property >>> position.timestamp
// position.timestamp "contains the time the position object was created" >> useful in knowing how old the location is
// coordinates properties: latitude, longitude, accuracy, altitude, altitudeAccuracy, heading & speed

// watchPosition() methos ->> watches your movements & reports your location back as your location changes
// it repeatedly calls the successHandler(to fetch your location) each time your position changes