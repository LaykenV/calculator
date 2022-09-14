const add = function(a, b) {
    return a + b;
};

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = function(a, b) {
    if(b == 0) return alert("Can not divide by 0");
    else {return a / b};
}

let clearBtn = document.querySelector("#clrbtn");
let backspaceBtn = document.querySelector("#bckbtn");
let sevenBtn = document.querySelector("#sevenbtn");
let eightBtn = document.querySelector("#eightbtn");
let nineBtn = document.querySelector("#ninebtn");
let dvsBtn = document.querySelector("#dvsbtn");
let fourBtn = document.querySelector("#fourbtn");
let fiveBtn = document.querySelector("#fivebtn")
let sixBtn = document.querySelector("#sixbtn");
let xBtn = document.querySelector("#xbtn");
let oneBtn = document.querySelector("#onebtn");
let twoBtn = document.querySelector("#twobtn");
let threeBtn = document.querySelector("#threebtn");
let minusBtn = document.querySelector("#minusbtn");
let dotBtn = document.querySelector("#dotbtn");
let zeroBtn = document.querySelector("#zerobtn");
let equalBtn = document.querySelector("#equalbutton");
let plusBtn = document.querySelector("#plusbutton");
let preview = document.querySelector("#preview");
let answer = document.querySelector("#finalanswer");

preview.textContent = "";
answer.textContent = "";

function pressOne() {
    preview.textContent += 1;
}

function pressTwo() {
    preview.textContent += 2;
}

function pressThree() {
    preview.textContent += 3;
}

function pressFour() {
    preview.textContent += 4;
}

function pressFive() {
    preview.textContent += 5;
}

function pressSix() {
    preview.textContent += 6;
}

function pressSeven() {
    preview.textContent += 7;
}

function pressEight() {
    preview.textContent += 8;
}

function pressNine() {
    preview.textContent += 9;
}

function pressZero() {
    preview.textContent += 0;
}

function pressDot() {
    preview.textContent += ".";
}

oneBtn.addEventListener("click", () => pressOne());

twoBtn.addEventListener("click", () => pressTwo());

threeBtn.addEventListener("click", () => pressThree());

fourBtn.addEventListener("click", () => pressFour());

fiveBtn.addEventListener("click", () => pressFive());

sixBtn.addEventListener("click", () => pressSix());

sevenBtn.addEventListener("click", () => pressSeven());

eightBtn.addEventListener("click", () => pressEight());

nineBtn.addEventListener("click", () => pressNine());

zeroBtn.addEventListener("click", () => pressZero());

dotBtn.addEventListener("click", () => pressDot());

function pressPlus() {
    preview.textContent += " + ";
}

function pressMinus() {
    preview.textContent += " - ";
}

function pressX() {
    preview.textContent += " * ";
}

function pressDvs() {
    preview.textContent += " / ";
}

plusBtn.addEventListener("click", () => pressPlus());

minusBtn.addEventListener("click", () => pressMinus());

xBtn.addEventListener("click", () => pressX());

dvsBtn.addEventListener("click", () => pressDvs());

let sum = 0;

function pressEqual() {
    let vrbs = preview.textContent.split(" ");
    operate(vrbs[1], vrbs[0], vrbs[2]);
    preview.textContent = Math.round(sum * 100) / 100;
    return answer.textContent = Math.round(sum * 100) / 100;

}

equalBtn.addEventListener("click", () => pressEqual());


const operate = function(op, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if(op == "+") {
        return sum = add(a, b);
    }
    else if(op == "-") {
        return sum = (a - b);
    }
    else if(op == "*") {
        return sum = (a * b);
    }
    else if(op == "/") {
        return sum = divide(a, b);
    }else{return "oops"};
}

function clear() {
    preview.textContent = "";
    answer.textContent = "";
    sum = 0;
};

clearBtn.addEventListener("click", () => clear());

function delte() {
   preview.textContent = preview.textContent.slice(0, (preview.textContent.length -1));
 
}

backspaceBtn.addEventListener("click", () => delte());


