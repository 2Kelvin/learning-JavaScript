// remember to add a <script tag> in the HTML to do the actual data retrieval
window.onload = function () {

}

// remember JSONP returns back the data in form of a JavaScript object
function updateSales(sales) {
    var salesDiv = document.getElementById("sales");
    // itering through the salesData then..
    // ..creating a div for each sale with a class of 'saleItem' & displaying it 
    for (var i = 0; i < sales.length; i++) {
        var sale = sales[i];
        var saleItemdiv = document.createElement("div");
        saleItemdiv.setAttribute("class", "saleItem");
        saleItemdiv.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
        salesDiv.appendChild(saleItemdiv);
    }
}

// USING JSONP
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