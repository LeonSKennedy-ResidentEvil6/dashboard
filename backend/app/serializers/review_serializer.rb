class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :comment, :book_id, :book

  def initialize(review_object)
    @review = review_object
  end 

  def to_serialized_json_review
    review_hash = {
      include: {
        book: {
          only: [:title, :book_id]
        }
      },
      except: [:created_at, :updated_at],
    }
    @review.to_json(review_hash)
  end 
end
