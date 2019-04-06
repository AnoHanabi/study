var http = require("http");
var url = require("url");
var util = require("util");
var querystring = require("querystring");

var postHTML = '<!DOCTYPE html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title></head><body><form method="post">url:<input type="text" name="url"><br>name: <input type="text" name="name"><br><input type="submit"></form></body></html>';

function start(route) {
    http.createServer(function (req, res) {
        var pN = url.parse(req.url).pathname;
        console.log("req:" + pN + "\n");
        route(pN);
        var post = "";
        req.on("data", function (chunk) {
            post += chunk;
        });
        req.on("end", function () {
            post = querystring.parse(post);
            res.writeHead(200, { "Content-type": "text-plain;charset=utf8" });
            if (post.url && post.name) {
                res.write(post.url + "\n" + post.name + "\n")
            }
            else {
                res.write(postHTML);
            }
            res.end();
        });
        // res.write(util.inspect(url.parse(req.url, true)) + "\n");
        // var params = url.parse(req.url, true).query;
        // res.write(params.url + "\n" + params.name + "\n");
    }).listen(8888);
    console.log("hello\n");
}

process.on("exit", function (code) {
    console.log("exit code:%d\n", code);
});

exports.start = start;