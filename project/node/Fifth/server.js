var http = require("http");
var url = require("url");

exports.start = function(route, handle) {
    http.createServer(function(request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log("Request for " + pathName + " received.");

        var postData = "";
        request.setEncoding("utf8");
        request.addListener("data",function(postDataChunk){
            console.log("Received POST data chunk '"+ postDataChunk + "'.");
            postData+=postDataChunk;
        })
        request.addListener("end",function(){
            route(handle, pathName, response, postData);
        })
    }).listen(8888);
    console.log("Server has started.");
};