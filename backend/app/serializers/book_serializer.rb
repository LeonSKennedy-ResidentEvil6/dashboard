class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :category, :description, :reviews

  def initialize(book_object)
    @book = book_object
  end 

  def to_serialized_json_book
    book_hash = {
      include: {
        reviews: {
          only: [:comment, :book_id]
        }
      },
      except: [:created_at, :updated_at],
    }
    @book.to_json(book_hash)
  end 

end
