let num1 = "";
let num2 = "";
let operand = "";
let previousResult = "";

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
            return add(x,y);
            
        case "-":
            return subtract(x,y);
            
        case "X":
            return multiply(x,y);
            
        case "/":
            if (y === 0){
                updateDisplay("You can't divide by zero >:P");
                return;
            }
            return divide(x,y);
            
    }
}

let updateDisplay = (buttonText) => {
    display.textContent = buttonText;
}

let display = document.querySelector(".display");

let buttonNodeList = document.querySelectorAll(".button")


buttonNodeList.forEach(buttonNode => {
    buttonNode.addEventListener('click', () =>{
        let buttonText = buttonNode.firstChild.textContent
        if (!isNaN(buttonText) || buttonText === "."){
            if (operand === ""){
                if (buttonText === "." && num1.includes(".")){
                    return;
                }
                num1 += buttonText;
                updateDisplay(num1);
            }
            else {
                if (buttonText === "." && num2.includes(".")){
                    return
                }
                num2 += buttonText;
                updateDisplay(`${num1} ${operand} ${num2}`);
            }
            
        }
        else if (buttonText === "AC"){ 
            //reset calculator
            num1 = "";
            num2 = "";
            operand = "";
            display.textContent = "";
            previousResult = "";
            updateDisplay("");
        }

        else if (buttonText === "="){ //preform operation
            if (num1 !== "" && num2 !== "" && operand !== ""){
                let result = operate(operand, parseFloat(num1), parseFloat(num2));
                result = parseFloat(result.toFixed(1));
                updateDisplay(result);

                previousResult = result.toString();

                num1 = previousResult;
                num2 = "";
                operand = "";
            }
            
        }
        else if (buttonText === "←"){
            if (operand === ""){
                num1 = num1.slice(0, -1);
                updateDisplay(num1);
            }
            else if (num2 === ""){
                operand = "";
                updateDisplay(num1);
            }
            else {
                num2 = num2.slice(0, -1);
                updateDisplay(`${num1} ${operand} ${num2}`)
            }
        }
        else {
            if (num1 !== ""){
                operand = buttonText;
                updateDisplay(`${num1} ${operand}`);
            }
            else {
                console.log("Invalid input: operand cannot be first")
            }
        }
        
    });
});

