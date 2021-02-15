class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :category, :description

  # def initialize(book_object)
  #   @book = book_object
  # end 

  # def to_serialized_json_book
  #   book_hash = {
  #     include: {
  #       only: [:title, :author, :category, :description]
  #     },
  #     except: [:created_at, :updated_at],
  #   }
  #   @book.to_json(book_hash)
  # end 

end
