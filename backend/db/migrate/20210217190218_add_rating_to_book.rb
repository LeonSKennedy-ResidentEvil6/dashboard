class AddRatingToBook < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :rating, :integer
  end
end