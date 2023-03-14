const addBtn = document.querySelector(".add-more");
const overlay = document.querySelector(".overlay");
const newPanel = document.querySelector(".new-book-panel");
// const newBookBtn = document.querySelector(".new-book-btn");
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

const addBook = () => {
  const book = new Book(bookTitle.value, bookAuthor.value, isRead.checked);
  books.push(book);

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

  removeButton.textContent = "Remove";

  bookDiv.classList.add("book");
  bookDiv.appendChild(titleDiv);
  bookDiv.appendChild(authorDiv);
  bookDiv.appendChild(readButton);
  bookDiv.appendChild(removeButton);

  booksGrid.appendChild(bookDiv);
};

const resetPanel = () => {
  bookAuthor.value = "";
  bookTitle.value = "";
  removeOverlay();
};

const validate = (event) => {
  event.preventDefault();
  addBook();
  console.log(books);
  resetPanel();
};

addBtn.addEventListener("click", popup);
overlay.addEventListener("click", removeOverlay);
// newBookBtn.addEventListener("click", validate);
newPanel.addEventListener("submit", validate);
newPanel.addEventListener("click", (e) => {
  e.stopPropagation();
});
