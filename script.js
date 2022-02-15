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
    if (parseInt(b) === 0) {
        return "the limit does not exist"
    } else {
        let divideTotal = parseInt(a) / parseInt(b);
        let divideTotalRounded = Math.round(100 * divideTotal) / 100;
        return divideTotalRounded;    
    }
}

// Add ability to click on a number (or numbers)
let value = "";
let displayValue = "";

const digitButtons = document.querySelectorAll(".digit-button");
digitButtons.forEach((button) => {
    button.addEventListener("click", function(e) {
        value = button.textContent;

        if (value === ".") {
            if (displayValue.indexOf(".") === 1) {
                return;
            } else {
                displayValue += value;
                populateDisplay(displayValue);
            }
        } else {
            displayValue += value;
            populateDisplay(displayValue);
        }
    });
})


// Add keyboard functionality to buttons
document.addEventListener("keyup", function(e) {
    let keyPressed =  `${e.key}`;
    console.log(keyPressed);
    console.log(e.shiftKey);
    let keyValue = parseInt(keyPressed);

    if (Number.isInteger(keyValue) || keyPressed === ".") {     // Keyboard functionality for digit buttons
        value = `${e.key}`;
        if (value === ".") {
            if (displayValue.indexOf(".") === 1) {
                return;
            } else {
                displayValue += value;
                populateDisplay(displayValue);
            }
        } else {
            displayValue += value;
            populateDisplay(displayValue);
        }
    } else if (keyPressed === "Backspace" || keyPressed === "Delete") {      // Keyboard functionality for AC button
        allClear();
    } else if (keyPressed === "+" || keyPressed === "-" || keyPressed === "*" || keyPressed === "/") {      // Keyboard functionality for operator buttons
        determineOperator(keyPressed);
    } else if (keyPressed === "Enter" || keyPressed === "=") {      // Keyboard functionality for equals button
        equals();
    }
});

// Function to update calculator display
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
        } else if (button == "x" || button == "*") {
            operator = "multiply";
        } else if (button == "÷" || button == "/") {
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
equalButton.addEventListener("click", equals);

function equals() {
    storeDigits();
    operate(operator, a, b);
}

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", allClear);

function allClear() {
    operator = "";
    a = "";
    b = "";
    displayValue = "";
    calcDisplay.textContent = "0";
}

/*
Missing features:
- Adding a 0 in front of the number if a decimal point is entered in the beginning before any numbers are
- Backspace button for users to redo their input if they make a mistake (!= AC)
- Bug fix -> when an operator is clicked and then equals before the second number, NaN is returned
- Prettify UI
*/