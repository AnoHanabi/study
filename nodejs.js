var http = require("http");
var url = require("url");

function start(route) {
    http.createServer(function (request, response) {
        var pN = url.parse(request.url).pathname;
        console.log("request:" + pN + "\n");
        route(pN);
        response.writeHead(200, { "Content-type": "text-plain" });
        response.end("hello\n");
    }).listen(8888);
    console.log("hello\n");
}

process.on("exit", function (code) {
    console.log("exit code:%d\n", code);
});

console.log(process.memoryUsage());

exports.start = start;