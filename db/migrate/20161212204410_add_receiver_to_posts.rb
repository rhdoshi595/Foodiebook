class AddReceiverToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :receiver_id, :integer
  end
end
