
const myLibrary = [];
const booksDiv = document.getElementById('books');
const newBookForm = document.getElementById('form');
const newBookTitle = document.getElementById('title');
const newBookAuthor = document.getElementById('author');
const newBookPages = document.getElementById('pages');
const newBookRead = document.getElementById('read');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = new Book('Harry Potter', 'J K Rowlings', 500, true);
const book2 = new Book('Harry Potter2', 'J K Rowlings', 344, false);
const book3 = new Book('Harry Potter3', 'J K Rowlings', 260, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

function displayBooks() {
  let books = '';
  let index = 0;
  myLibrary.forEach((book) => {
    books += `
    <div class="book-card">
      <h4 class="title"><span class=" font-weight-bold">Title: </span><span class="value">${
  book.title
}</span> </h4>
      <h4 class="title"><span class=" font-weight-bold">Author: </span><span class="value">${
  book.author
}</span> </h4>
      <h4 class="title"><span class=" font-weight-bold">Pages:</span> <span class="value">${
  book.pages
}</span> </h4>
      <h4 class="title"><span class=" font-weight-bold">Read:</span> <span class="value">${
  book.read ? 'Yes' : 'No'
}</span> </h4>
      <button onclick="deleteBookFromLibrary(this)" data-id="${index}" class="btn btn-danger my-1">Delete Book</button>
      <button onclick="myLibrary[${index}].toggleReadStatus()" class="btn ${
  book.read ? 'btn-primary' : 'btn-success'
} my-1">${book.read ? 'Mark as unread' : 'Mark as read'}</button>
    </div>
    `;
    index += 1;
  });
  booksDiv.innerHTML = books;
}

window.onload = function () {
  displayBooks();
};

function deleteBookFromLibrary(e) { // eslint-disable-line no-unused-vars
  myLibrary.splice(e.getAttribute('data-id'), 1);
  displayBooks();
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
  displayBooks();
};

function showForm() { // eslint-disable-line no-unused-vars
  newBookForm.style.display = 'flex';
}

function createBook() { // eslint-disable-line no-unused-vars
  const book = new Book(
    newBookTitle.value,
    newBookAuthor.value,
    newBookPages.value,
    newBookRead.checked,
  );
  addBookToLibrary(book);
  newBookForm.style.display = 'none';
  displayBooks();
}

function cancelButton() { // eslint-disable-line no-unused-vars
  newBookForm.style.display = 'none';
}
