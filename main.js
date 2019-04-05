var greet = require("./hello.js");
greet("Hanabi");

var fs = require("fs");
var data = fs.readFileSync("js.css");
console.log(data.toString() + "\n");
console.log("done\n");

fs.readFile("js.css", function (err, data) {
    if (err) {
        return console.error(err);
    }
    else {
        console.log(data.toString() + "\n");
    }
});
console.log("done\n");

var events = require("events");
var eventEmitter = new events.EventEmitter();
var cH = function connected() {
    console.log("connect succeed\n");
    eventEmitter.emit("data_received");
};
eventEmitter.on("connection", cH);
eventEmitter.on("data_received", function () {
    console.log("receive succeed\n");
});
eventEmitter.emit("connection");
console.log("done\n");

var buf = Buffer.alloc(256);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString("utf8", 0, 26) + "\n");

const buf2 = Buffer.from([0x1, 0x2, 0x3]);
const json = JSON.stringify(buf2);
console.log(json + "\n");

var data1 = "";
var rS = fs.ReadStream("js.css");
rS.setEncoding("utf8");
rS.on("data", function (chunk) {
    data1 += chunk;
});
rS.on("end", function () {
    console.log(data1 + "\n");
});
rS.on("error", function (err) {
    console.log(err.stack);
});
console.log("rS done\n");

var data2 = "output";
var wS = fs.createWriteStream("output.txt");
wS.write(data2, "utf8");
wS.end();
wS.on("finish", function () {
    console.log("write done\n");
});
wS.on("error", function (err) {
    console.log(err.stack);
});

var wS2 = fs.createWriteStream("output.txt");
rS.pipe(wS2);

