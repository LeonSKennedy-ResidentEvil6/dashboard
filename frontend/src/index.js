const BASE_URL = "http://127.0.0.1:3000/api/v1"
const BOOKS_URL = `${BASE_URL}/books`
const REVIEWS_URL = `${BASE_URL}/reviews`

document.addEventListener('DOMContentLoaded', () => {
    getBooks()
});

const addBookBtn = document.querySelector('#new-book-btn')
const bookForm = document.querySelector('.book-container')
let bookCollection = document.querySelector('#book-collection')

async function getBooks() {
    // using preventDefault to stop invalid text input from reaching input field
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
            <h2>${book.title}</h2>
            <h2>${book.author}</h2>
            <h2>${book.category}</h2>
            <h2>${book.description}</h2>
            <h2>${book.reviews.forEach(function(review) { return review.comment })}</h2>
        </div>
        <br>`;
        // book.reviews.comment is undefined
        bookCollection.innerHTML += bookMarkup
}

