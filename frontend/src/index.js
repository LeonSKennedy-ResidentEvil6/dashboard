const BASE_URL = "http://127.0.0.1:3000/api/v1"
const BOOKS_URL = `${BASE_URL}/books`
const REVIEWS_URL = `${BASE_URL}/reviews`

const addBookBtn = document.querySelector('#new-book-btn')
const createBookForm = document.querySelector('#add-book-form')
let bookCollection = document.querySelector('#book-collection')
let theBookEditBtn = document.querySelector('#edit-btn')

document.addEventListener('DOMContentLoaded', () => {
    // when the page is load, what DOM I want to manipulate? load books
    getBooks()
    createBookForm.addEventListener("submit", (evnt) => createFormHandler(evnt))
    theBookEditBtn.addEventListener(click, (evnt) => editBook(evnt))
});

async function getBooks() {
    fetch(BOOKS_URL)
        .then(response => response.json())
        .then(books => {
            if(books.message) {
                alert(books.message)
            } else 
            books.forEach(book => { 
                let theBook = new Book(book, book.reviews)
                bookCollection.innerHTML += theBook.renderBooks()
            })
        })
        .catch((error) => alert(error.message));
}

function createFormHandler(evnt) {
    evnt.preventDefault()
    const bookTitleInput = document.querySelector("#input-title").value
    const bookAuthorInput = document.querySelector("#input-author").value
    const bookCategoryInput = document.querySelector("#input-category").value
    const bookDescriptionInput = document.querySelector("#input-description").value
    const bookImageInput = document.querySelector("#input-image").value
    const bookRatingInput = document.querySelector("#input-rating").value
    const bookLikesInput = document.querySelector("#input-likes").value
    postBook(bookTitleInput, bookAuthorInput, bookCategoryInput, bookDescriptionInput, bookImageInput, bookRatingInput, bookLikesInput)
}

function postBook(title, author, category, description, image, rating, likes) {
   const newBook = {title, author, category, description, image, rating, likes}
   fetch(BOOKS_URL, {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
        },
       body: JSON.stringify(newBook)
   })
   .then(response => response.json())
   .then(book => {
        let addBook = new Book(book, book.reviews)
        bookCollection.innerHTML += addBook.renderBooks()
        createBookForm.reset()
   })
   .catch((error) => alert(error.message));
}

// contiune...
// create a edit form handler (ddoes prevent default needed here?)
// create a edit form for each book
// pull that book info & store in variables
// feed the variables in editbook -> fetch
// create editbook function in book class object just like renderbooks above
function editBook(title, author, category, description, image, rating, likes) {
    const theBookToEdit = {title, author, category, description, image, rating, likes}
    fetch(BOOKS_URL + `/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(theBookToEdit)
    })
    .then(response => response.json())
    .then(book => {
        let editBook = 
    })
}