/* eslint-disable */
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = new Book('Harry Potter', 'J K Rowlings', 500, true);
const book2 = new Book('Harry Potter2', 'J K Rowlings', 344, false);
const book3 = new Book('Harry Potter3', 'J K Rowlings', 260, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

/* eslint-enable */
