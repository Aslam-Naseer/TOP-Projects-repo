const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector(".submit-btn");

let flag = true;

const validateAll = (event) => {
  if (flag) {
    inputs.forEach((item) => item.classList.add("input-box"));
    flag = false;
  }

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checkValidity() === false) {
      inputs[i].reportValidity();
      event.preventDefault();
      break;
    }
  }
};

form.addEventListener("submit", validateAll);

inputs[2].addEventListener("keyup", (event) => {
  const elem = event.target;

  if (elem.validity.typeMismatch) {
    elem.setCustomValidity("I am expecting an email address!");
  } else {
    elem.setCustomValidity("");
  }
});

inputs[4].addEventListener("keyup", (event) => {
  const elem = event.target;

  if (elem.validity.tooShort) {
    elem.setCustomValidity(`Only ${elem.value.length} / 8 characters `);
  } else {
    elem.setCustomValidity("");
  }
});

inputs[5].addEventListener("keyup", (event) => {
  const elem = event.target;

  if (elem.value !== inputs[4].value) {
    elem.setCustomValidity("Password mismatch");
  } else {
    elem.setCustomValidity("");
  }
});

inputs.forEach((node) =>
  node.addEventListener("focusout", (node) =>
    node.target.classList.add("input-box")
  )
);
