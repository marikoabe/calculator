// Functions to add, subtract, multiply and divide
function add(a, b) {
    let addTotal = parseInt(a) + parseInt(b);
    return addTotal;
}

function subtract(a, b) {
    let subtractTotal = parseInt(a) - parseInt(b);
    return subtractTotal;
}

function multiply(a, b) {
    let multiplyTotal = parseInt(a) * parseInt(b);
    return multiplyTotal;
}

function divide(a, b) {
    if (parseInt(b) = 0) {
        return "DOES NOT WORK!!!"
    } else {
        let divideTotal = parseInt(a) / parseInt(b);
        return divideTotal;    
    }
}

// Add ability to click on a number (or numbers)
let value = "";
let displayValue = "";

const digitButtons = document.querySelectorAll(".digit-button");
digitButtons.forEach((button) => {
    button.addEventListener("click", function(e) {
        value = button.textContent;
        displayValue += value;
        populateDisplay(displayValue);
    });
})

// Functiont to update calculator display
let calcDisplay = document.querySelector("#calc-display");

function populateDisplay(displayValue) {
    calcDisplay.textContent = displayValue;
}

// Add ability to click on operator buttons

let a = "";
let b = "";
let operator = "";

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach((button) =>{
    button.addEventListener("click", function(e) {
        determineOperator(button.textContent);
    })
})

function determineOperator(button) {
    if (operator === "") {
        if (button == "+") {
            operator = "add";
        } else if (button == "-") {
            operator = "subtract";
        } else if (button == "x") {
            operator = "multiply";
        } else if (button == "÷") {
            operator = "divide";
        }
        storeDigits();
    
        if (a !== "" && b !== "") {
            operate(operator, a, b);
            storeDigits();
        }
    } else {
        if (button == "+") {
            newOperator = "add";
        } else if (button == "-") {
            newOperator = "subtract";
        } else if (button == "x") {
            newOperator = "multiply";
        } else if (button == "÷") {
            newOperator = "divide";
        }
        storeDigits();
    
        if (a !== "" && b !== "") {
            operate(operator, a, b);
            operator = newOperator;
            storeDigits();
        }
    }
    
}

function storeDigits() {
    if (a === "") {
        a = displayValue;
        displayValue = "";
        return a;
    } else if (b === "") {
        b = displayValue;
        displayValue = "";
        return b;
    } else {
        a = calcDisplay.textContent;
        b = "";
        console.log(a, b);
    }
}

// Run operators
function operate(operator, a, b) {
    console.log(a, b);

    if (operator === "add") {
        console.log(a, b);
        calcDisplay.textContent = add(a, b);
    } else if (operator === "subtract") {
        calcDisplay.textContent = subtract(a, b);
    } else if (operator === "multiply") {
        calcDisplay.textContent = multiply(a, b);
    } else if (operator === "divide") {
        calcDisplay.textContent = divide(a, b);
    }
}
    

const equalButton = document.querySelector("#equals")
equalButton.addEventListener("click", function(e) {
    storeDigits();
    operate(operator, a, b);
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function(e){
    operator = "";
    a = "";
    b = "";
    displayValue = "";
    calcDisplay.textContent = "Woohoo";
})