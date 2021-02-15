class Api::V1::ReviewsController < ApplicationController


    def index
        reviews = Review.all
        render json: reviews
    end 

    def create
        review = Review.new(review_params)
    end 

    def review_params
        params.require(:review).permit(:comment, :book_id)
    end 

end
