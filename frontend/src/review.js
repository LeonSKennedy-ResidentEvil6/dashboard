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

    
}