var express = require("express");
var app = express();
var fs = require("fs");
var multer = require("multer");
var bodyparse = require("body-parser");
var cookieparse = require("cookie-parser");
var util = require("util");

app.use(cookieparse());
app.use(multer({ dest: "/tmp/" }).array("image"));
app.use(bodyparse.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/public"));

app.get("/index.html", function (req, res) {
    res.sendFile(__dirname + "/index.html");
    console.log("cookies:" + util.inspect(req.cookies) + "\n");
});

app.get("/get", function (req, res) {
    var ans = {
        "name": req.query.name,
        "age": req.query.age
    };
    console.log(ans);
    res.end(JSON.stringify(ans) + "\n");
});

app.post("/upload", function (req, res) {
    console.log(req.files[0]);
    var dest_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(dest_file, data, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                var ans = {
                    "message": "succeed",
                    "name": req.files[0].originalname
                };
            }
            res.end(JSON.stringify(ans));
        });
    });
});

app.get("/usersList", function (req, res) {
    fs.readFile(__dirname + "/users.json", "utf8", function (err, data) {
        res.end(data);
    });
});

var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

app.get("/usersAdd", function (req, res) {
    fs.readFile(__dirname + "/users.json", "utf8", function (err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        res.end(JSON.stringify(data));
    });
});

app.get("/:id", function (req, res) {
    fs.readFile(__dirname + "/users.json", "utf8", function (err, data) {
        data = JSON.parse(data);
        var ans = data["user" + req.params.id];
        res.end(JSON.stringify(ans));
    });
});

var server = app.listen(2333, function () {
    var add = server.address().address;
    var port = server.address().port;
    console.log(add + "\n" + port + "\n");
});

