class Review {
    constructor(review) {
        this.id = review.id,
        this.comment = review.comment,
        this.book_id = review.book_id
    }

    renderReview() {
        return `
            <div review-id=${this.id}>
                <h2>Comment: ${this.comment}</h2>
            </div>
            <br>`;
    }

    static createNewReview() {
        const comment = document.getElementById("input-reviews").value
        const bookId = currentBookId

        let review = {
            comment: comment,
            book_id: bookId
        }

        let reviewObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(review)
        }

        fetch(BOOKS_URL + book_id + "/reviews", reviewObj)
            .then(response => response.json())
            .then(review => {
                let newReview = new Review(review)
                newReview.renderReview();
            })
    }

    static fetchReviews(id) {
        document.getElementById("reviewsList").innerHTML = '';
        fetch(BOOKS_URL + id + "/reviews")
            .then(response => response.json())
            .then(reviews => {
                for (const review of reviews) {
                    let review = new Review(review);
                    review.renderReview();
                }
            })
    }

    static toggleReviews(id) {
        (e) => { e.preventDefault() };
        currentBookId = id;
        this.fetchReviews(id);
    }

}