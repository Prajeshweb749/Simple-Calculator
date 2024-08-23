let displaytxt = document.getElementById("display-text");
let count = "";
let total = "";

function resetCountForNewEntry() {
    // Reset count for new entry if it's empty or has a result
    if (count === "" || count === total) {
        count = "";
    }
}

// Number button handlers
function addNumber(num) {
    resetCountForNewEntry();  // Prepare for a new number entry
    count += num;
    displaytxt.innerHTML = count;
}

// Operator button handlers
function addOperator(op) {
    if (count !== "" && !["+", "-", "*", "/", "%", "."].includes(count.slice(-1))) {
        count += op;
        displaytxt.innerHTML = count;
    }
}

// Equals button handler
document.getElementById("=").onclick = function() {
    try {
        total = eval(count); // Evaluate the expression
        displaytxt.innerHTML = total;
        count = total.toString(); // Set count to the result for new entries
    } catch (e) {
        displaytxt.innerHTML = "Error";
        count = ""; // Reset count on error
    }
};

// Clear button handler
document.getElementById("c").onclick = function() {
    if (count.length > 1) {
        count = count.slice(0, -1);
        displaytxt.innerHTML = count;
    } else {
        count = "";
        displaytxt.innerHTML = "0";
    }
};

// AC button handler
document.getElementById("ac").onclick = function() {
    count = "";
    displaytxt.innerHTML = "0";
};

// Number buttons
document.getElementById("1").onclick = function() { addNumber("1"); };
document.getElementById("2").onclick = function() { addNumber("2"); };
document.getElementById("3").onclick = function() { addNumber("3"); };
document.getElementById("4").onclick = function() { addNumber("4"); };
document.getElementById("5").onclick = function() { addNumber("5"); };
document.getElementById("6").onclick = function() { addNumber("6"); };
document.getElementById("7").onclick = function() { addNumber("7"); };
document.getElementById("8").onclick = function() { addNumber("8"); };
document.getElementById("9").onclick = function() { addNumber("9"); };
document.getElementById("0").onclick = function() { addNumber("0"); };

// Operator buttons
document.getElementById("+").onclick = function() { addOperator("+"); };
document.getElementById("-").onclick = function() { addOperator("-"); };
document.getElementById("x").onclick = function() { addOperator("*"); };
document.getElementById("/").onclick = function() { addOperator("/"); };
document.getElementById("%").onclick = function() { addOperator("%"); };
document.getElementById(".").onclick = function() {
    if (count === "" || !["+", "-", "*", "/", "%", "."].includes(count.slice(-1))) {
        count += ".";
        displaytxt.innerHTML = count;
    }
};
document.getElementById("^").onclick = function() { addOperator("**"); };
