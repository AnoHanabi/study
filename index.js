var server = require("./nodejs.js");
var router = require("./router.js");
var util = require("util");
var fs = require("fs");
var dns = require("dns");

server.start(router.route);

console.log(__filename + "\n");
console.log(__dirname + "\n");

console.log("%s\n", "test c++");

console.log(process.execPath + " " + process.platform + "\n");
console.log(process.cwd() + " " + process.version + "\n" + process.memoryUsage() + "\n");

function base() {
    this.name = "base";
}
base.prototype.showName = function () {
    console.log(this.name + "\n");
};
function sub() {
    this.name = "sub";
}
util.inherits(sub, base);
var subName = new sub();
subName.showName();

function person1() {
    this.name = "tom";
    this.printName = function () {
        return this.name;
    }
}
var p1 = new person1();
console.log(util.inspect(p1) + "\n");
console.log(util.inspect(p1, true) + "\n");

var buf = new Buffer.alloc(1024);
fs.open("js.css", "r+", function (err, fd) {
    if (err) {
        console.error(err);
    }
    else {
        console.log("open succeed\n");
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
            if (err) {
                return console.error(err);
            }
            else {
                console.log("bytes:" + bytes + "\n");
                if (bytes > 0) {
                    console.log(buf.slice(0, bytes).toString() + "\n");
                }
            }
        });
    }
});

fs.stat("./js.css", function (err, stats) {
    console.log(stats.isFile() + "\n");
});

fs.writeFile("output.txt", "111111112", function (err) {
    if (err) {
        console.error(err);
    }
    console.log("write succeed\n");
    fs.readFile("output.txt", function (err, data) {
        if (err) {
            console.error(err);
        }
        console.log(data.toString() + "\n");
    });
});

fs.readdir("./", function (err, files) {
    if (err) {
        return console.error(err);
    }
    files.forEach(function (file) {
        console.log(file + "\n");
    });
});

dns.lookup("github.com", function onlookup(err, add, family) {
    console.log("add:" + add + "\n");
    dns.reverse(add, function (err, link) {
        console.log("link:" + JSON.stringify(link) + "\n");
    });
});