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