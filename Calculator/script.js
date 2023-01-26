const calculator = document.querySelector("main");

const output = calculator.querySelector("#output");
const miniOut = calculator.querySelector("#miniOut");
const numButtons = calculator.querySelectorAll(".num");
const operators = calculator.querySelectorAll(".opr");
const equalBtn = calculator.querySelector(".equal");
const zero = calculator.querySelector(".zero");
const clrBtn = calculator.querySelector(".clr");
const acBtn = calculator.querySelector(".all");

let input = 0,
  result = 0,
  operation;

const equate = () => {
  input = parseFloat(output.textContent);
  if (output.textContent === "0") return;
  switch (operation) {
    case "+":
      result += input;
      break;
    case "-":
      result -= input;
      break;
    case "x":
      result *= input;
      break;
    case "/":
      result /= input;
      break;
    default:
      result = input;
  }
};

const numAction = (e) => {
  if (zero.disabled) {
    output.textContent = "";
    zero.disabled = false;
  }
  if (output.textContent.length < 10) {
    output.textContent += e.target.value;
  }
};

const oprAction = (e) => {
  equate();
  operation = e.target.value;
  miniOut.textContent = result + "  " + operation;
  output.textContent = 0;
  equalBtn.disabled = false;
  zero.disabled = true;
};

const equalAction = (e) => {
  const temp = result;
  equate();
  miniOut.textContent = temp + " " + operation + " " + input;
  output.textContent = result;
  operation = "";
  equalBtn.disabled = true;
  zero.disabled = true;
};

const clearLast = () => {
  let text = output.textContent;
  output.textContent = text.length > 1 ? text.slice(0, text.length - 1) : 0;
  if (text.length <= 1) zero.disabled = "true";
};

const clearAll = () => {
  result = 0;
  miniOut.textContent = "";
  output.textContent = result;
  operation = "";
  equalBtn.disabled = true;
  zero.disabled = true;
};

numButtons.forEach((btn) => btn.addEventListener("click", numAction));
operators.forEach((btn) => btn.addEventListener("click", oprAction));
equalBtn.addEventListener("click", equalAction);
clrBtn.addEventListener("click", clearLast);
acBtn.addEventListener("click", clearAll);
