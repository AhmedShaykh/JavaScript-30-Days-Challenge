console.log(4 == 4);
console.log("a" == "a");
console.log(true == true);
console.log(null == undefined);
console.log(null === undefined);

function testCase() {
    let checkCase = "ahmed";
    if (checkCase == checkCase.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
};

console.log(testCase());

var a = 10;
var b = 12;
var c = 10;

console.log(c > b);
console.log(c >= a);
console.log(c <= a);

const myNum = () => {
    var per = 67;

    if (per >= 80 && per < 100) {
        return false;
    } else if (per >= 70 && per < 80) {
        return true;
    } else if (per >= 60 && per < 70) {
        return false;
    } else if (per >= 50 && per < 60) {
        return false;
    } else if (per >= 40 && per < 50) {
        return false;
    } else if (per >= 33 && per < 40) {
        return false;
    } else if (per >= 100) {
        return false;
    } else {
        return false;
    };
}

console.log(myNum());

function data() {
    let stat = 45;

    if (stat == 45 || stat == 20) {
        return true;
    }
    else {
        return false;
    }
}

console.log(data());

const teachers = ["Sir Zia", "Sir Zeeshan", "Adil Bhai"];
console.log(teachers.includes("Sir Zia"));
console.log(teachers.includes("Khurram Shaikh"));