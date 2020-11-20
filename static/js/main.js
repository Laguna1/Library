let myLibrary = [];
let booksDiv = document.getElementById('books')
let newBookForm = document.getElementById('form')


function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

// Book.prototype.info = function() {
//   let read_status
//   if(this.read){
//     read_status = 'read.'
//   } else {
//     read_status = 'not read yet.'
//   }
//   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read_status}`
// }

function addBookToLibrary(book) {
  myLibrary.push(book)
}

let book1 = new Book('Harry Potter', 'J K Rowlings', 500, true)
let book2 = new Book('Harry Potter2', 'J K Rowlings', 344, false)
let book3 = new Book('Harry Potter3', 'J K Rowlings', 260, true)



function displayBooks(){
  addBookToLibrary(book1)
  addBookToLibrary(book2)
  addBookToLibrary(book3)
  let books = ``
  myLibrary.forEach(book => {
    books +=`
    <div class="book-card">
      <h4 class="title">Title: <span class="value">${book.title}</span> </h4>
      <h4 class="title">Author: <span class="value">${book.author}</span> </h4>
      <h4 class="title">Pages: <span class="value">${book.pages}</span> </h4>
      <h4 class="title">Read: <span class="value">${book.read ? 'Yes' : 'No'}</span> </h4>
    </div>
    `;   
  });
  booksDiv.innerHTML = books
}

function showForm() {
  newBookForm.style.display = 'flex'
  
}