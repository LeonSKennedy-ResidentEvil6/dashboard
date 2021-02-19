class Book {
    constructor(data, reviews=[]) {
        this.id = data.id;
        this.title = data.title;
        this.category = data.category;
        this.description = data.description;
        this.image = data.image
        this.rating = data.rating
        this.likes = data.likes
        this.reviews = reviews
        // bookReviews.map(review => review.comment)
        Book.all.push(this)
    }

    renderBooks() {
        // debugger
        return `
            <div book-id=${this.id}>
                <h2>Title: ${this.title}</h2>
                <h2>Author: ${this.author}</h2>
                <h2>Category: ${this.category}</h2>
                <h2>Description: ${this.description}</h2>
                <h2>Image: ${this.image}</h2>
                <h2>Rating: ${this.rating}</h2>
                <h2>likes: ${this.likes}</h2>
                <h2>Reviews: ${this.reviews.comment}</h2>
            </div>
            <br>`;
    }
}

Book.all = [];