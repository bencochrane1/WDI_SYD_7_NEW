class AddLocationAndAvailableToApartments < ActiveRecord::Migration
  def change
    add_column :apartments, :available, :boolean
    add_column :apartments, :location, :text
  end
end
