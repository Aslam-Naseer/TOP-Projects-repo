const addBtn = document.querySelector(".add-more");
const overlay = document.querySelector(".overlay");
const newPanel = document.querySelector(".new-book-panel");
// const newBookBtn = document.querySelector(".new-book-btn");
const newBookPanel = document.querySelector(".new-book-panel");
const bookTitle = newBookPanel.querySelector(".book-title");
const bookAuthor = newBookPanel.querySelector(".author");
const isRead = newBookPanel.querySelector(".is-read");

const books = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

const popup = () => {
  overlay.style.visibility = "visible";
  addBtn.classList.add("add-more-hover");
};

const removeOverlay = () => {
  overlay.style.visibility = "hidden";
  addBtn.classList.remove("add-more-hover");
};

const addBook = () => {
  books.push(new Book(bookTitle.value, bookAuthor.value, isRead.checked));
  console.log(books);
};

const resetPanel = () => {
  bookAuthor.value = "";
  bookTitle.value = "";
};

const validate = (event) => {
  event.preventDefault();
  addBook();
  resetPanel();
};

addBtn.addEventListener("click", popup);
overlay.addEventListener("click", removeOverlay);
// newBookBtn.addEventListener("click", validate);
newPanel.addEventListener("submit", validate);
newPanel.addEventListener("click", (e) => {
  e.stopPropagation();
});
