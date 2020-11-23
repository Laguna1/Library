window.onload = function () {
  displayBooks();
};

let myLibrary = [];
let booksDiv = document.getElementById('books')
let newBookForm = document.getElementById('form')
let newBookTitle = document.getElementById('title')
let newBookAuthor = document.getElementById('author')
let newBookPages = document.getElementById('pages')
let newBookRead = document.getElementById('read')


function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function deleteBookFromLibrary(e) {
  myLibrary.splice(e.getAttribute('data-id'), 1)
  displayBooks()
}

let book1 = new Book('Harry Potter', 'J K Rowlings', 500, true)
let book2 = new Book('Harry Potter2', 'J K Rowlings', 344, false)
let book3 = new Book('Harry Potter3', 'J K Rowlings', 260, true)
addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)


function displayBooks(){
  let books = ``;
  let index = 0;
  myLibrary.forEach(book => {
    books +=`
    <div class="book-card">
      <h4 class="title"><span class=" font-weight-bold">Title: </span><span class="value">${book.title}</span> </h4>
      <h4 class="title"><span class=" font-weight-bold">Author: </span><span class="value">${book.author}</span> </h4>
      <h4 class="title"><span class=" font-weight-bold">Pages:</span> <span class="value">${book.pages}</span> </h4>
      <h4 class="title"><span class=" font-weight-bold">Read:</span> <span class="value">${book.read ? 'Yes' : 'No'}</span> </h4>
      <button onclick="deleteBookFromLibrary(this)" data-id="${index}" class="btn btn-danger my-1">Delete Book</button>
    </div>
    `; 
    index++  
  });
  booksDiv.innerHTML = books;
}

function showForm() {
  newBookForm.style.display = 'flex';
}

function createBook() {
  let book = new Book (
    newBookTitle.value,
    newBookAuthor.value,
    newBookPages.value,
    newBookRead.checked
  );
  addBookToLibrary(book);
  newBookForm.style.display = 'none';
  displayBooks()
}

function cancelButton() {
  newBookForm.style.display = 'none';
}
