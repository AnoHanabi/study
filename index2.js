var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("req path:" + pathname + "\n");
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.error(err);
            res.writeHead(404, { "Content-type": "text/html;charset=utf8" });
        }
        else {
            res.writeHead(200, { "Content-type": "text/html;charset=utf8" });
            res.write(data.toString());
        }
        res.end();
    });
}).listen(8888);

console.log("localhost:8888\n");