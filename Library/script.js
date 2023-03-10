const addBtn = document.querySelector(".add-more");
const overlay = document.querySelector(".overlay");

const popup = () => {
  overlay.style.display = "block";
  addBtn.classList.add("add-more-hover");
};

const removeOverlay = () => {
  overlay.style.display = "none";
  addBtn.classList.remove("add-more-hover");
};

addBtn.addEventListener("click", popup);
overlay.addEventListener("click", removeOverlay);
