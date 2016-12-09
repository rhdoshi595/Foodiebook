class AddMoreDetailsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :profile_img, :string
    add_column :users, :cover_img, :string
    add_column :users, :workplace, :string
    add_column :users, :school, :string
    add_column :users, :current_city, :string
    add_column :users, :hometown, :string
    add_column :users, :relationship_status, :string
  end
end
