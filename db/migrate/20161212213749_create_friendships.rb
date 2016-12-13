class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
      t.integer :sender_id, null: false
      t.integer :replier_id, null: false
      t.string :status, default: "unanswered", null: false
      t.timestamps
    end
    add_index :friendships, [:sender_id, :replier_id], unique: true
  end
end
