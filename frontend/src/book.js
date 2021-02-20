class Book {
    constructor(book) {
        this.id = book.id;
        this.title = book.title;
        this.category = book.category;
        this.description = book.description;
        this.image = book.image
        this.rating = book.rating
        this.likes = book.likes
        this.reviews = book.reviews
        Book.all.push(this)
    }

    renderBooks() {
        // return `
        //     <div book-id=${this.id}>
        //         <h2>Title: ${this.title}</h2>
        //         <h2>Author: ${this.author}</h2>
        //         <h2>Category: ${this.category}</h2>
        //         <h2>Description: ${this.description}</h2>
        //         <h2>Image: ${this.image}</h2>
        //         <h2>Rating: ${this.rating}</h2>
        //         <h2>likes: ${this.likes}</h2>
        //         <h2>Reviews: ${this.renderReviews()}</h2>
        //     </div>
        //     <br>`;
        const bookList = document.querySelector('#book-list')
        const bookListMarkup = `${this.title}`
        let selection = document.createElement('option')
        selection.innerHTML = bookListMarkup
        selection.setAttribute("id", this.id)
        selection.setAttribute("value", this.id)
        bookList.appendChild(selection)

        let bookButton = document.createElement('button')
        bookButton.setAttribute("id", this.id)
        bookButton.innerHTML = `${this.title}`
        bookButton.addEventListener('click', (evnt) => {
            renderReviews(evnt)
        })

        const bookSelector = document.querySelector("#book-selector")
        bookSelector.appendChild(bookButton)
    }
}

Book.all = [];