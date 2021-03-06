class Api::V1::BooksController < ApplicationController
  def index
    books = Book.all
    # render json: books
    # render json: BookSerializer.new(books)
    render json: BookSerializer.new(books).to_serialized_json_book, status: :accepted
  end

  def create
    book = Book.new(books_params)
    if book.save
      render json: BookSerializer.new(book).to_serialized_json_book, status: :accepted
    else
      render json: { errors: book.errors.full_messages }, statues: :unprocessible_entity
    end
  end

  private

  def books_params
    params.require(:book).permit(:title, :author, :description, :description)
  end
end
