class Api::V1::BooksController < ApplicationController
  def index
    books = Book.all
    render json: BookSerializer.new(books).to_serialized_json_book, status: :accepted
  end

  def create
    book = Book.new(book_params)
    if book.save
      render json: BookSerializer.new(book).to_serialized_json_book, status: :accepted
    else
      render json: { errors: book.errors.full_messages }, statues: :unprocessible_entity
    end
  end

  def show
    book = Book.find_by(id: params[:id])
    render json: BookSerializer.new(book).to_serialized_json_book, status: :accepted
  end

  def destroy
    book = Book.find_by(id: params[:id])
    book.destroy
  end 

  private

  def book_params
    params.require(:book).permit(:title, :author, :category, :description, :image, :rating, :likes)
  end
end
