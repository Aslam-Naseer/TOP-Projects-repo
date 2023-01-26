const calculator = document.querySelector("main");

const output = calculator.querySelector("#output");
const miniOut = calculator.querySelector("#miniOut");
const numButtons = calculator.querySelectorAll(".num");
const operators = calculator.querySelectorAll(".opr");
const equalBtn = calculator.querySelector(".equal");
const zero = calculator.querySelector(".zero");
const clrBtn = calculator.querySelector(".clr");
const acBtn = calculator.querySelector(".all");
const negBtn = calculator.querySelector(".neg");
const decimal = calculator.querySelector(".dot");

let input1 = 0,
  input2 = 0,
  result = 0,
  operation = "+";

const equate = () => {
  input1 = result;
  input2 = parseFloat(output.textContent);
  switch (operation) {
    case "+":
      result = input1 + input2;
      break;
    case "-":
      result = input1 - input2;
      break;
    case "x":
      result = input1 * input2;
      break;
    case "/":
      result = input1 / input2;
      break;
  }
};

const numAction = (e) => {
  if (output.textContent === "0") {
    output.textContent = e.target.value;
  } else if (output.textContent.length < 10) {
    output.textContent += e.target.value;
  }
};

const oprAction = (e) => {
  if (output.textContent !== "") equate();
  operation = e.target.value;
  miniOut.textContent = result + " " + operation;
  output.textContent = "";
};

const equalAction = () => {
  equate();
  miniOut.textContent = input1 + " " + operation + " " + input2;
  output.textContent = result;
};

const clearLast = () => {
  let text = output.textContent;
  output.textContent = text.length > 1 ? text.slice(0, text.length - 1) : 0;
};

const clearAll = () => {
  result = 0;
  miniOut.textContent = "";
  output.textContent = result;
  operation = "+";
};

const negate = () => {
  output.textContent = parseFloat(output.textContent) * -1;
};

const addDecimal = () => {
  if (output.textContent.includes(".")) return;
  output.textContent += ".";
};

const typeZero = () => {
  if (output.textContent === "0") return;
  output.textContent += 0;
};

numButtons.forEach((btn) => btn.addEventListener("click", numAction));
operators.forEach((btn) => btn.addEventListener("click", oprAction));
equalBtn.addEventListener("click", equalAction);
clrBtn.addEventListener("click", clearLast);
acBtn.addEventListener("click", clearAll);
negBtn.addEventListener("click", negate);
decimal.addEventListener("click", addDecimal);
zero.addEventListener("click", typeZero);
