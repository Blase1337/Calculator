let num1 = "";
let num2 = "";
let operand = "";

let add = function(x, y){
    return x + y;
}

let subtract = function(x, y){
    return x-y;
}

let multiply = function(x, y){
    return x*y;
}

let divide = function(x, y){
    return x/y;
}

let operate = function (operator, x, y){
    switch(operator){
        case "+":
            add(x,y);
            break;
        case "-":
            subtract(x,y);
            break;
        case "*":
            multiply(x,y);
            break;
        case "/":
            divide(x,y);
            break;
    }
}

let updateDisplay = (buttonText) => {
    display.textContent = buttonText;
}

let display = document.getElementsByClassName("display");

let buttonNodeList = document.querySelectorAll(".button")


buttonNodeList.forEach(buttonNode => {
    buttonNode.addEventListener('click', () =>{
        let buttonText = buttonNode.firstChild.textContent
        if (buttonText != "+" && buttonText != "-" &&  buttonText != "X" &&  buttonText != "÷" &&  buttonText != "AC"){
            if (!operand){
                num1 += buttonText;
                console.log(num1);
            }
            else {
                num2 += buttonText;
                console.log(num2);
            }
        }
        else if (buttonText === "AC"){ 
            //reset calculator
            num1 = "";
            num2 = "";
            operand = "";
        }

        else if (buttonText === "="){ //preform operation
            operate(operand, parseFloat(num1), parseFloat(num2));
        }
        else {
            operand = buttonText;
            console.log(operand);
        }
        
    });
});

