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
    fetch(BOOKS_URL)
        .then(response => response.json())
        .then(books => {
            books.forEach(book => { 
                renderBooks(book) 
            })
        })
        .catch((error) => {
            alert(error.message);
        });
}

// getBooks().then(books => {
//     books.forEach(book => { 
//         renderBooks(book) 
//     })
// })

async function renderBooks(book) {

        let title = document.createElement('p');
        title.innerText = book.title

        let author = document.createElement('p');
        author.innerText = book.author

        let description = document.createElement('p');
        description.innerText = book.description

        let category = document.createElement('p');
        category.innerText = book.category

        let ul = document.createElement('ul')
        let reviews = book.reviews
        reviews.forEach(function(review) {
            let li = document.createElement('li');
            li.innerText = review.comment
            ul.appendChild(li)
        })

        let divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')
        divCard.append(title, author, description, category, ul)
        bookCollection.appendChild(divCard)
}

