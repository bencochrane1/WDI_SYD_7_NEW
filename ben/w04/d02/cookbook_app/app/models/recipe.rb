# == Schema Information
#
# Table name: recipes
#
#  id           :integer          not null, primary key
#  name         :string(255)
#  course       :string(255)
#  cooktime     :string(255)
#  serving_size :string(255)
#  instructions :string(255)
#  image        :string(255)
#  created_at   :datetime
#  updated_at   :datetime
#  book_id      :integer
#

class Recipe < ActiveRecord::Base
    validates :instructions, length: { minimum: 200 }

    belongs_to :book
    has_many :ingredients_recipes
    has_many :ingredients, through: :ingredients_recipes
end
