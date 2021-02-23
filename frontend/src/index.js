const BASE_URL = "http://127.0.0.1:3000/api/v1"
const BOOKS_URL = `${BASE_URL}/books`
const REVIEWS_URL = `${BASE_URL}/reviews`

const createBookForm = document.querySelector('#add-book-form')
const createReviewForm = document.querySelector('#review-form')
let bookCollection = document.querySelector('#book-collection')

document.addEventListener('DOMContentLoaded', () => {
    // when the page is load, what do I want to manipulate on DOM? load books and reviews
    createReviewForm.addEventListener("submit", (e) => createReviewFormHandler(e))
    createBookForm.addEventListener("submit", (e) => createBookFormHandler(e))
    // display all books on index.html page to user
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

function createBookFormHandler(e) {
    e.preventDefault()
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

function createReviewFormHandler(e) {
    e.preventDefault()
    const commentInput = document.querySelector('#comment').value
    const bookId = parseInt(document.querySelector('#book-list').value)

    postReview(commentInput, bookId)
}

function renderReviews(e) {
    const reviewContainer = document.querySelector('#review-container')
    // Refresh how this works below: the target property: reference to the object onto which event was dispatched. e here is the bookButton
    reviewContainer.innerHTML = `Reviews for: ${e.target.innerText}: <br><br>`

    let deleteBook = document.createElement('button')
    deleteBook.innerHTML = "Delete this book"
    deleteBook.setAttribute('id', e.target.id)
    deleteBook.addEventListener("click", function deleteBook(e) {
        fetch(`${BOOKS_URL}/${e.target.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(function(response){
            if(response.status = 204)
                location.reload();
            else
                throw new Error(response.message)
                console.log(response.status)
        })
        .catch(error => { alert(error.message) })
    })
    reviewContainer.appendChild(deleteBook)

    fetch(`${BOOKS_URL}/${e.target.id}`)
    .then(response => response.json())
    .then(book => {
        book.reviews.forEach(review => {
            let newReview = new Review(review)
            newReview.renderReview()
        })
    })
    .catch(error => { alert(error.message) })
}

function postReview(commentInput, book_id) {
    const reviewObj = {commentInput, book_id}
    fetch(REVIEWS_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(reviewObj)
    })
    .then(response => response.json())
    .then(review => {
        let newReview = new Review(review)
        newReview.renderReview()
        location.reload()
    })
    .catch(error => {alert(error.message)})
}

function deleteReview(e) {
    fetch(`${REVIEWS_URL}/${e.target.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(function(resp){
        if(resp.status = 204)
            location.reload();
        else
            throw new Error(resp.message)
            console.log(resp.status)
    })
    .catch(error => {alert(error.message)})
}