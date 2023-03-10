const addBtn = document.querySelector(".add-more");
const overlay = document.querySelector(".overlay");
const newPanel = document.querySelector(".new-book-panel");

const popup = () => {
  overlay.style.visibility = "visible";
  addBtn.classList.add("add-more-hover");
};

const removeOverlay = () => {
  overlay.style.visibility = "hidden";
  addBtn.classList.remove("add-more-hover");
};

addBtn.addEventListener("click", popup);
overlay.addEventListener("click", removeOverlay);
newPanel.addEventListener("click", (e) => {
  e.stopPropagation();
});
