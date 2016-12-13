# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  body        :text             not null
#  user_id     :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#  receiver_id :integer
#

class Post < ActiveRecord::Base
  validates :body, presence: true
  validates :user_id, presence: true

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

  belongs_to :receiver,
    class_name: :User,
    foreign_key: :receiver_id

end
