function Addition(a, b){
    return (a+b);
}

function Subtraction(a, b){
    return (a-b);
}

function Multiplication(a, b){
    return (a*b);
}

function Divide(a, b){
    return (a/b);
}

let x = parseFloat(prompt("Enter 1st Number:"));
let ch = prompt("Enter Operator(+, -, *, /):");
let y = parseFloat(prompt("Enter 2nd Number:"));

switch(ch){
    case('+'): document.write(Addition(x,y));
               break;
    case('-'): document.write(Subtraction(x,y));
               break;
    case('*'): document.write(Multiplication(x,y));
               break;
    case('/'): document.write(Divide(X,y));
               break;
    default: document.write("Invalid Operator.");
}