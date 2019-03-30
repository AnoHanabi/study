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
    var x=new Date();
    var numX=x.constructor.toString().indexOf("Date");
    document.getElementById("checkDate").innerHTML=(numX>-1)?"Yes<br>":"No<br>";
}