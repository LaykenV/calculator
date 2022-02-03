const add = function(a, b) {
    return a + b;
};

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = function(op, a, b) {
    if(op == "+") {
        return a + b;
    }
    else if(op == "-") {
        return a - b;
    }
    else if(op == "*") {
        return a * b;
    }
    else if(op == "/") {
        return a / b;
    }else{return "oops"};
}

console.log(operate("/", 10, 3));

