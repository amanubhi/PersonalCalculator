// Get references to the display and buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

// Define the current input and operator
let currentInput = "";
let operator = null;

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const value = button.dataset.value;
        const action = button.dataset.action;

        // Handle different button actions
        if (action) {
            handleAction(action);
        } else {
            handleInput(value);
        }
    });
});

// Function to handle input
function handleInput(value) {
    if (currentInput === "0" && value !== ".") {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.textContent = currentInput;
}

// Function to handle different actions
function handleAction(action) {
    if (action === "clear") {
        currentInput = "0";
        operator = null;
        display.textContent = currentInput;
    } else if (action === "equals") {
        try {
            currentInput = eval(currentInput).toString();
            display.textContent = currentInput;
        } catch {
            display.textContent = "Error";
            currentInput = "0";
        }
    } else if (action === "plus-minus") {
        if (currentInput) {
            if (currentInput.startsWith("-")) {
                currentInput = currentInput.slice(1);
            } else {
                currentInput = "-" + currentInput;
            }
            display.textContent = currentInput;
        }
    } else if (action === "percent") {
        currentInput = (parseFloat(currentInput) / 100).toString();
        display.textContent = currentInput;
    }
}
