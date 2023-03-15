const addBtn = document.querySelector(".add-more");
const overlay = document.querySelector(".overlay");
const newPanel = document.querySelector(".new-book-panel");
const booksGrid = document.querySelector("#book-grid");
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

const changeReadStatus = (e) => {
  const button = e.target;

  if (button.classList.contains("read-book")) {
    button.textContent = "Not Read";
  } else {
    button.textContent = "Read";
  }
  button.classList.toggle("read-book");
  button.classList.toggle("unread-book");

  books[button.dataset.index].read = !books[button.dataset.index].read;
};

const displayBook = (book) => {
  const bookDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const readButton = document.createElement("button");
  const removeButton = document.createElement("button");

  titleDiv.textContent = `"${book.title}"`;
  authorDiv.textContent = `${book.author}`;

  if (book.read) {
    readButton.classList.add("read-book");
    readButton.textContent = "Read";
  } else {
    readButton.classList.add("unread-book");
    readButton.textContent = "Not read";
  }
  readButton.addEventListener("click", changeReadStatus);
  readButton.dataset.index = books.indexOf(book);

  removeButton.textContent = "Remove";
  removeButton.dataset.index = books.indexOf(book);
  removeButton.addEventListener("click", removeBook);

  bookDiv.classList.add("book");
  bookDiv.appendChild(titleDiv);
  bookDiv.appendChild(authorDiv);
  bookDiv.appendChild(readButton);
  bookDiv.appendChild(removeButton);

  booksGrid.appendChild(bookDiv);
};

const displayAllBook = () => {
  let first = booksGrid.firstElementChild;
  while (first) {
    first.remove();
    first = booksGrid.firstElementChild;
  }

  books.forEach((book) => displayBook(book));
};

const removeBook = (e) => {
  books.splice(e.target.dataset.index, 1);
  displayAllBook();
};

const addBook = (book) => {
  books.push(book);
  displayAllBook();
};

const resetPanel = () => {
  bookAuthor.value = "";
  bookTitle.value = "";
  removeOverlay();
};

const validate = (event) => {
  event.preventDefault();
  addBook(new Book(bookTitle.value, bookAuthor.value, isRead.checked));
  console.log(books);
  resetPanel();
};

addBtn.addEventListener("click", popup);
overlay.addEventListener("click", removeOverlay);
newPanel.addEventListener("submit", validate);
newPanel.addEventListener("click", (e) => {
  e.stopPropagation();
});

addBook(new Book("Angels and Demons", "Dan Brown", true));
addBook(new Book("A Brief history of time", "Stephen Hawkings", false));
