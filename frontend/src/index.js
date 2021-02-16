const BASE_URL = "http://127.0.0.1:3000/api/v1"
const BOOKS_URL = `${BASE_URL}/books`
const REVIEWS_URL = `${BASE_URL}/reviews`

document.addEventListener('DOMContentLoaded', () => {
    getBooks()
});

const bookContainer = document.querySelector(".card")

async function getBooks() {
    fetch(BOOKS_URL)
        .then(response => response.json())
        .catch((error) => {
            alert(error.message);
        });
}

async function renderBooks(books) {
    books.forEach(function(book) {
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.setAttribute('book-id', book.id)

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
        div.append(title, author, description, category, ul)
        bookContainer.appendChild(div)
    })
}

