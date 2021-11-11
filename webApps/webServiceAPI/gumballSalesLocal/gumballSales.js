window.onload = function () {
    // requesting & receiving real time gumball sales from a web sservice using HTTP
    // URL of the gumball data sales
    var url = "http://localhost/projects/JS/webServiceAPI/gumballSales/sales.json";
    // creating a request object
    var request = new XMLHttpRequest();
    // telling the browser which URL it should retrieve data from & the kind of request it should use ("GET")
    // we do this using request's open() method
    request.open("GET", url);
    // function handler to be called once the request has received a response
    // the response is in the "responseText" property of the request object
    // "XMLHttpRequest object's onload property" activates the event handler once the request is done fetching data from the server
    request.onload = function () {
        // (event handler) to be executed when the data is successfully retrieved
        // 200 means data request & retrieval was successful
        if (request.status == 200) {
            // data from the HTTP GET retrieval is stored in the "responseText" property of the request object
            // function updateSales updates the divs in HTML with the sales reterieved thro the web service
            updateSales(request.responseText);
        }
    };
    // sending the request to the server
    // use the send() to tell the request to go get the data
    // we pass "null" if we're not sending any data to the web service
    request.send(null);

    function updateSales(responseText) {
        var salesDiv = document.getElementById("sales");
        // converying the JSON string retrieved to a JavaScript object
        var salesData = JSON.parse(responseText);
        // itering through the salesData then..
        // ..creating a div for each sale with a class of 'saleItem' & displaying it 
        for (var i = 0; i < salesData.length; i++) {
            var sale = salesData[i];
            var saleItemdiv = document.createElement("div");
            saleItemdiv.setAttribute("class", "saleItem");
            saleItemdiv.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
            salesDiv.appendChild(saleItemdiv);
        }
    }
}

// basically: we've created a XMLHttpRequest object, loaded it with a ("URL" and a "GET request type") & asssigned it a handler once it receives the data it requested for

// JSON
// one of the best dta formats for web apps
// it's readable and can be passed quickly & easily into JavaScript values and objects
// to use it, you have to understand objects
// has 2 methods: parse() and stringify()
// JSON.stringify() ->> converts a JSON object into a JSON string..that can be used as a value & passed to functions
// JSON.parse() ->> converts a JSN string into a JSON object 
// not everything can be converted into a JSON string, eg) methods
// objects,numbers,strings and arrays can be converted into JSON strings/objects

// BROWSER SECURITY POLICY/ USING JSONP
// you can't retrieve data from a domain different from the domain the page itself was created
// when building web apps largely dependant on your own data (no domain cross-platform), use XMHttpRequest
// XMLHttpRequest is a great way to get data into your web apps when the data is hosted at the same domain as your app
// if you need to get data from a 3rd party/ another domain; use JSONP (JSON with Padding)
// JSONP way makes the <script> tag do all the work of retrieving the data
// a JS file served from another domain but linked in your page using a script tag works -> that's the logic JSONP uses
// basically, the <script> tag is retrieving data from another domain
// you can pass data thro the JS file you're referencing in your <script  tag>
// >>> JSONP is a way to retrieve JSON objects using the <script tag>
// >>>therfore it (JSONP) avoids the cross-domain limitation XMLHttpRequest has with the browser
// by using the JSONP method; when the server sends back the JSON string thro the <script tag>, it wraps it in a function call
// you can specify this "function" in the URL as a 'second parameter' -> it's specified after ?
// this funtion parameter is called a 'callback' ie. the event handler that will handle the request data once fully received
// with JSONP, by the time you get your hands on the data it's already converted into a JavaScript object for you