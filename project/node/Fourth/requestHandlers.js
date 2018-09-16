var exec = require("child_process").exec;
exports.start = function(response) {
    console.log("Request handler 'start' was called.");
    exec("ls -lah", function(error, stdout, stderr) {
        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.write(stdout);
        response.end();
    });
};
exports.upload = function(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write("Hello Upload");
    response.end();
};