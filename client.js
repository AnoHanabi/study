var http = require("http");

var option = {
    host: "localhost",
    port: "8888",
    path: "/index.html"
};

var callback = function (response) {
    var body = "";
    response.on("data", function (data) {
        body += data;
    });
    response.on("end", function () {
        console.log(body + "\n");
    })
}

var req = http.request(option, callback);
req.end();