var map;
var watchId = null;
var pointACoords = {
    latitude: 47.624851,
    longitude: -122.52099
};
var prevCoords = null;

window.onload = function () {
    // checking if geolocation is supported
    if (navigator.geolocation) {
        var trackButton = document.getElementById("track");
        // if trackButton is clicked, track the user's location
        trackButton.onclick = function () {
            // parameter {timeout} is a positionOptions parameter...used the expression directly instead of creating a variable to hold it instead
            watchId = navigator.geolocation.watchPosition(displayLocation, displayError, { timeout: 5000 });
        };

        var stopTrackingButton = document.getElementById("stopTracking");
        // if the stopTracking button is clicked, stop tracking the user
        stopTrackingButton.onclick = function () {
            // checking if there's a watchId
            if (watchId) {
                navigator.geolocation.clearWatch(watchId);
                watchId = null;
            }
        };
    } else {
        alert("Oops, geolocation not supoorted!");
    }

    function displayLocation(position) {
        // function displayUserLocation
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        var location = document.getElementById("location");
        location.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
        location.innerHTML += " (with " + position.coords.accuracy + " meters accuracy";
        // calculating the distance between two points/places
        var km = computeDistance(position.coords, pointACoords);
        var distance = document.getElementById("distance");
        distance.innerHTML = "You are " + km + " km from Point A";
        //making sure only one map is created
        if (map == null) {
            showGoogleMap(position.coords);
            prevCoords = position.coords;
        } else {
            // adding a new marker only if the user has moved more than 20 meters away from the previous location
            var meters = computeDistance(position.coords, prevCoords) * 1000;
            if (meters > 20) {
                scrollMapToPosition(position.coords);
                prevCoords = position.coords;
            }
        }
    }

    function displayError(error) {
        var errorTypes = {
            0: "Unknown error",
            1: "Permission denied by user",
            2: "Position is not available",
            3: "Request timed out"
        };
        var errorMessage = errorTypes[error.code];
        if (error.code == 0 || error.code == 2) {
            errorMessage = errorMessage + " " + error.message;
        }

        var div = document.getElementById("location");
        div.innerHTML = errorMessage;
    }

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


    function showGoogleMap(coords) {
        var googleLatitudeAndLongitude = new google.maps.LatLng(coords.latitude, coords.longitude);
        var googleMapOptions = {
            zoom: 10,
            center: googleLatitudeAndLongitude,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var googleMapDiv = document.getElementById("map");
        map = new google.maps.Map(googleMapDiv, googleMapOptions);
        var title = "Your Location";
        var content = "You are here: " + coords.latitude + ", " + coords.longitude;
        googleMarker(map, googleLatitudeAndLongitude, title, content);
    }

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

    // function that centers the map on your location as you move around and drops a new marker each time it gets a new position
    function scrollMapToPosition(coords) {
        var latitude = coords.latitude;
        var longitude = coords.longitude;
        var latlong = new google.maps.LatLng(latitude, longitude);
        // as you move the map centers around your location
        map.panTo(latlong);
        // adding a marker to each new position you move to...to create a tracking trail (of places you've passed through)
        addMarker(map, latlong, "Your new location", "You moved to: " + latitude + ", " + longitude);
    }
}

// NOTES
// use "geolocation.watchPosition()" method to track someone's location repeatedly
// watchPosition() takes 3 parameters; a >> success handler, an >> error handler & the oprions parameter
// watchPosition() returns a "watchId" which can be used [in geolocation.clearWatch()] to stop the tracking 

// to stop tracking pass the "watchId" in the geolocation.clearWatch() method and set it (back) to null
// make sure the google map is only created once, remember watchPosition repeatedly calls & updates the location as the location changes in real time
// therefore, you don't want it creating a new map every time the location changes  >>>that's why I used the if statement to solve this issue

// with the position "options" parameter, you can control how geolocation computes its values
// positionOptions has 3 properties > > "enableHighAccuracy", timeout & maximumAge
// enableHighAccuracy ->> tells the API you need the most accurate location it can get..its values are either true or false
// timeout -> > controls how long (in milliseconds) the browser should take to determine a location..its default value is set to infinity
// if the set timeout runs out, the browser returns an error, thro the error handler
// maximumAge - > > sets the oldest age a location can be before the browser recalculates the location...its default value is zero
// ie) how old in seconds till it refreshes the location to update to the new location data-> i.e will it use an old cached location or get a new refreshed/updated location
// therefore, the browser always has to recalculate its location every time when determining the location

// if you want to specify a set of options in an object, just type the literal object right into the middle of the method call; like in showGoogleMap() & googleMarker()
// then pass the variable holding these options to getCurrentPosition() || watchPosition() as the 3rd parameter

// if using Google Maps API, DO NOT FORGET to link its Javascript API in the HTML head