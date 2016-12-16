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

  has_attached_file :image, default_url: "missing-post.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :receiver,
    class_name: :User,
    primary_key: :id,
    foreign_key: :receiver_id

  has_many :comments,
   class_name: :Comment,
   primary_key: :id,
   foreign_key: :post_id
end
