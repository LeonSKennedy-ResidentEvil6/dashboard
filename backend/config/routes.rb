Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :create, :show, :edit, :delete]
      resources :reviews, only: [:index, :create, :show, :edit, :delete]
    end 
  end 
end
