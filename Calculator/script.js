const calculator = document.querySelector("main");

const output = calculator.querySelector("#output");
const numButtons = calculator.querySelectorAll(".num");
const operators = calculator.querySelectorAll(".opr");
const equalBtn = calculator.querySelector(".eql");
const zero = calculator.querySelector(".zero");

let value1, value2, operation;

const numAction = (e) => {
  if (zero.disabled) {
    output.textContent = "";
    zero.disabled = false;
  }
  if (output.textContent.length < 10) {
    output.textContent = output.textContent + e.target.value;
  }
};

numButtons.forEach((btn) => btn.addEventListener("click", numAction));
//operators.forEach((btn) => btn.addEventListener("click", oprAction));
