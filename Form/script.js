const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector(".submit-btn");

const validityTest = (node) => {
  node.classList.add("input-box");
};

const validateAll = (event) => {
  inputs.forEach((item) => {
    if (!validityTest(item)) {
      event.preventDefault();
    }
  });
};

form.addEventListener("submit", validateAll);
