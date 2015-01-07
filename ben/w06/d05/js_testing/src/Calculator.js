var Calculator = function() {};

Calculator.prototype.performOperation = function(operation, firstNumber, secondNumber) {
    if (operation == "subtract") {
        return firstNumber - secondNumber;
    } else if (operation === "add") {
        return firstNumber + secondNumber;    
    } else if (operation === "multiply") {
        return firstNumber * secondNumber;
    } else {
        return firstNumber / secondNumber;
    }
        
};



