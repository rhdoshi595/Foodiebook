class AddAttachmentProfileavatarToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :profileavatar
    end
  end

  def self.down
    remove_attachment :users, :profileavatar
  end
end
