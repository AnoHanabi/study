var server = require("./nodejs.js");
var router = require("./router.js");
var util = require("util");
var fs = require("fs");

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

fs.open("js.css", "r+", function (err) {
    if (err) {
        console.error(err);
    }
    else {
        console.log("open succeed\n");
    }
});

fs.stat("./js.css", function (err, stats) {
    console.log(stats.isFile() + "\n");
})