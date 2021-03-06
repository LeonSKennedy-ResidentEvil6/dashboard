class Api::V1::ReviewsController < ApplicationController
  def index
    reviews = Review.all
    render json: ReviewSerializer.new(reviews).to_serialized_json_review, status: :accepted
  end

  def create
    review = review.new(review_params)
    if review.save
      render json: ReviewSerializer.new(review).to_serialized_json_review, status: :accepted
    else
      render json: { errors: review.errors.full_messages }, statues: :unprocessible_entity
    end
  end

  private
    
  def review_params
    params.require(:review).permit(:comment, :book_id)
  end
end
