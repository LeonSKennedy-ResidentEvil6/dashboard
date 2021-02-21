const BASE_URL = "http://127.0.0.1:3000/api/v1"
const BOOKS_URL = `${BASE_URL}/books`
const REVIEWS_URL = `${BASE_URL}/reviews`

const addBookBtn = document.querySelector('#new-book-btn')
const createBookForm = document.querySelector('#add-book-form')
const createReviewForm = document.querySelector('#add-review-form')
let bookCollection = document.querySelector('#book-collection')

document.addEventListener('DOMContentLoaded', () => {
    // when the page is load, what do I want to manipulate on DOM? load books and reviews
    createBookForm.addEventListener("submit", (evnt) => createBookFormHandler(evnt))
    createReviewForm.addEventListener("submit", (evnt) => createReviewFormHandler(evnt))
    getBooks()
});

async function getBooks() {
    fetch(BOOKS_URL)
        .then(response => response.json())
        .then(books => {
            books.forEach(book => { 
                const theBook = new Book(book)
                theBook.renderBooks();
            })
        })
        .catch((error) => alert(error.message));
}

function createBookFormHandler(evnt) {
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
        const addBook = new Book(book)
        addBook.renderBooks();
        createBookForm.reset();
   })
   .catch((error) => alert(error.message));
}

function createReviewFormHandler(evnt) {
    evnt.preventDefault()
    const reivewInput = document.querySelector('#input-reviews').value

    postReview(reivewInput)
}

function renderReviews(evnt) {
    const reviewElement = document.querySelector('#review-container')
    // Refresh how this works below: the target property: reference to the object onto which event was dispatched. evnt here is the bookButton
    reviewElement.innerHTML = `Reviews for ${evnt.target.innerText}: <br><br>`
}

function postReview(reivewInput) {
    fetch(REVIEWS_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(reivewInput)
    })
    .then(response => response.json())
    .then(review => {
        let newReview = new Review(review.comment)
        newReview.renderReview()
        location.reload()
    })
    .catch(error => {alert(error.message)})
}