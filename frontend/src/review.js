class Review {
    constructor(review) {
        this.id = review.id
        this.comment = review.comment
        this.book = review.book_id

        Review.all.push(this)
    }

    renderReview() {
        const reviewList = document.querySelector('#review-container')
        const reviewMarkup =  `
            <br>
            <div class="review" id=${this.id} style="border: 4px red">
                <h2>Review: ${this.comment}</h2>
            </div>
            <br>
        `;

        let reviewElement = document.createElement('div')
        reviewElement.innerHTML = reviewMarkup
        reviewList.appendChild(reviewElement)

        let deleteReview = document.createElement('button')
        deleteReview.setAttribute("id", this.id)
        deleteReview.innerHTML = "Delete this review"
        deleteReview.addEventListener("click", (evnt) => deleteReview(evnt))
        reviewList.appendChild(deleteReview)
    }

}

Review.all = [];