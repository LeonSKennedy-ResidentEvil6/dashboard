const BASE_URL = "http://127.0.0.1:3000/api/v1"
const BOOKS_URL = `${BASE_URL}/books`
const REVIEWS_URL = `${BASE_URL}/reviews`

document.addEventListener('DOMContentLoaded', () => {
    // when the page is load, what DOM I want to manipulate? load books
    getBooks()
    createBookForm.addEventListener("submit", (evnt) => createFormHandler(evnt))
});

const addBookBtn = document.querySelector('#new-book-btn')
const createBookForm = document.querySelector('#add-book-form')
let bookCollection = document.querySelector('#book-collection')

async function getBooks() {
    fetch(BOOKS_URL)
        .then(response => response.json())
        .then(books => {
            if(books.message) {
                alert(books.message)
            } else 
            books.forEach(book => { 
                // let newBook = new book(book)
                renderBooks(book) 
            })
        })
        .catch((error) => alert(error.message));
}

// getBooks().then(books => {
//     books.forEach(book => { 
//         renderBooks(book) 
//     })
// })

async function renderBooks(book) {
    // debugger
    const bookMarkup = `
        <div book-id=${book.id}>
            <h2>Title: ${book.title}</h2>
            <h2>Author: ${book.author}</h2>
            <h2>Category: ${book.category}</h2>
            <h2>Description: ${book.description}</h2>
            <h2>Image: ${book.image}</h2>
            <h2>Rating: ${book.rating}</h2>
            <h2>likes: ${book.likes}</h2>
            <h2>Reviews: ${book.reviews.forEach(review => console.log(review.comment))}</h2>
        </div>
        <br>`;
        // book.reviews.comment is undefined
        bookCollection.innerHTML += bookMarkup
}

function createFormHandler(evnt) {
    evnt.preventDefault()
    const bookTitleInput = document.querySelector("#input-title").value
    const bookAuthorInput = document.querySelector("#input-author").value
    const bookCategoryInput = document.querySelector("#input-category").value
    const bookDescriptionInput = document.querySelector("#input-description").value
    postBook(bookTitleInput, bookAuthorInput, bookCategoryInput, bookDescriptionInput)
}

function postBook(title, author, category, description) {
   const newBook = {title, author, category, description}
   fetch(BOOKS_URL, {
       method: "POST",
       headers: {"Content-Type": "application/json"},
       body: JSON.stringify(newBook)
   })
   .then(response => response.json())
   .then(book => {
    //    console.log(book)
       renderBooks(book)
   })
   .catch((error) => alert(error.message));
}
