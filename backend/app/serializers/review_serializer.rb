class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :comment, :book_id, :book
end
