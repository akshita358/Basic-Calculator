// Selecting elements
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const answer = document.getElementById("ans");
const buttons = document.querySelectorAll(".operation");

const toggle = document.getElementById("toggle");
const themeText = document.querySelector(".theme");
const root = document.documentElement;

// Calculator operations
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let first = parseFloat(num1.value);
        let second = parseFloat(num2.value);

        // Check if inputs are empty
        if (isNaN(first) || isNaN(second)) {
            answer.textContent = "Enter both numbers";
            return;
        }

        let result;
        let operation = button.dataset.operation;

        switch (operation) {
            case "addition":
                result = first + second;
                break;

            case "subtraction":
                result = first - second;
                break;

            case "multiplication":
                result = first * second;
                break;

            case "division":
                if (second === 0) {
                    answer.textContent = "Cannot divide by 0";
                    return;
                }
                result = first / second;
                break;

            default:
                result = "Error";
        }

        answer.textContent = result;
    });
});

// Theme toggle
toggle.addEventListener("change", () => {
    if (toggle.checked) {
        root.setAttribute("data-theme", "dark");
        themeText.textContent = "Dark Mode";
    } else {
        root.setAttribute("data-theme", "light");
        themeText.textContent = "Light Mode";
    }
});