const cards = document.querySelector(".cards");

cards.addEventListener("wheel", (e) => {
  e.preventDefault();
  cards.scrollLeft += e.deltaY;
});
