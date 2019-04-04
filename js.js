function person1(name, age) {
    return alert("your name is " + name + ",you are " + age + " years old\n" + name.length);
}

function day7() {
    var x = new Date().getDay();
    var str;
    switch (x) {
        case 0: str = "日"; break;
        case 1: str = "一"; break;
        case 2: str = "二"; break;
        case 3: str = "三"; break;
        case 4: str = "四"; break;
        case 5: str = "五"; break;
        case 6: str = "六"; break;
    }
    document.getElementById("dayNum").innerHTML = str;
}

function forIn() {
    var person2 = {
        name: "tom",
        age: 24,
        hobby: "bike"
    };
    var x;
    var ans = "";
    for (x in person2)
        ans += (person2[x] + " ");
    document.getElementById("fi").innerHTML = ans;
}

function checkDate() {
    var x = new Date();
    var numX = x.constructor.toString().indexOf("Date");
    document.getElementById("checkDate").innerHTML = (numX > -1) ? "Yes<br>" : "No<br>";
}

function rp() {
    var ans = str1.replace(/oob/i, "[replace text]");
    document.getElementById("vr").innerHTML = ans;
}

function mes() {
    try {
        errFun("text");
    }
    catch (err) {
        alert(err.message);
    }
}

function mes1() {
    var ans = document.getElementById("mes2");
    ans.innerHTML = "";
    var num1 = document.getElementById("mes1").value;
    try {
        if (num1 == "") throw "null";
        if (isNaN(num1)) throw "NaN";
        if (Number(num1) < 1 || Number(num1) > 5) throw "must between 1 to 5";
    }
    catch (err) {
        ans.innerHTML = "error text:" + err;
    }
    finally {
        document.getElementById("mes1").value = "";
    }
}

var add = (function () {
    var ans = 0;
    function add1() {
        return ans += 1;
    }
    return add1;
})();

function plusOne() {
    document.getElementById("plusOneP").innerHTML = add();
}

function p1Color() {
    document.getElementById("p1").style.color = "blue";
}

// function cookie() {
//     if (navigator.cookieEnabled == true) {
//         alert("cookie ok");
//     }
//     else {
//         alert("no cookie");
//     }
// }

function up() {
    var upX = document.getElementById("up");
    upX.value = upX.value.toUpperCase();
}

function over() {
    var overX = document.getElementById("divM");
    overX.innerHTML = "over";
}

function out() {
    var outX = document.getElementById("divM");
    outX.innerHTML = "out";
}

function down() {
    var downX = document.getElementById("divM");
    downX.innerHTML = "down";
}

function mouseUp() {
    var mouseUpX = document.getElementById("divM");
    mouseUpX.innerHTML = "out";
}

function com() {
    var res = " ";
    var ans = confirm("click");
    if (ans == true) {
        res = "yes";
    }
    else {
        res = "no";
    }
    document.getElementById("com").innerHTML = res;
    var ans2 = prompt("your name", "tom");
    if (ans2 != "") {
        document.getElementById("prompt").innerHTML = ans2;
    }
}

var setIn = setInterval(function () { myTime() }, 1000);

function myTime() {
    var d = new Date();
    document.getElementById("myTime").innerHTML = d.toLocaleTimeString();
}

function stopTime() {
    clearInterval(setIn);
}

function sCook(uName, uValue, uTime) {
    var d = new Date();
    d.setTime(d.getTime() + uTime * 24 * 60 * 60 * 1000);
    document.cookie = uName + "=" + uValue + ";expires=" + d;
}

function gCook(uName) {
    uName += "=";
    var gArr = document.cookie.split(";");
    for (var i = 0; i < gArr.length; i++) {
        var gArrStr = gArr[i].trim();
        if (gArrStr.indexOf(uName) == 0) {
            return gArrStr.substring(uName.length);
        }
    }
    return "";
}

function cCook() {
    var user = gCook("username");
    if (user != "") {
        alert("welcome " + user);
    }
    else {
        user = prompt("your name", "111");
        if (user != "") {
            sCook("username", user, 1);
        }
    }
}
