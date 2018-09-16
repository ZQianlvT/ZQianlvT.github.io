var http = require("http");
var url = require("url");
exports.start = function(route, handle) {
    http.createServer(function(request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log("Request for " + pathName + " received.");
        route(handle, pathName, response);
    }).listen(8888);
    console.log("Server has started.");
};