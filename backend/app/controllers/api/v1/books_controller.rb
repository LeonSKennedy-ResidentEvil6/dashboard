class Api::V1::BooksController < ApplicationController

    def index
        @books = Books.all
        render json: @books
    end 

    def books_params
        params.permit(:title, :author, :description, :description)
    end 
    
end
