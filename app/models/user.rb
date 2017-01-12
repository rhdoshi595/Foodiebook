# == Schema Information
#
# Table name: users
#
#  id                         :integer          not null, primary key
#  email                      :string           not null
#  password_digest            :string           not null
#  session_token              :string           not null
#  created_at                 :datetime
#  updated_at                 :datetime
#  first_name                 :string
#  last_name                  :string
#  gender                     :string
#  birthday                   :datetime
#  profile_img                :string
#  cover_img                  :string
#  workplace                  :string
#  school                     :string
#  current_city               :string
#  hometown                   :string
#  relationship_status        :string
#  profileavatar_file_name    :string
#  profileavatar_content_type :string
#  profileavatar_file_size    :integer
#  profileavatar_updated_at   :datetime
#  coverimage_file_name       :string
#  coverimage_content_type    :string
#  coverimage_file_size       :integer
#  coverimage_updated_at      :datetime
#

class User < ActiveRecord::Base

  attr_reader :password

  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :gender, presence: true
  validates :birthday, presence: true

  has_attached_file :profileavatar, default_url: "burgers.png"
  validates_attachment_content_type :profileavatar, content_type: /\Aimage\/.*\Z/

  has_attached_file :coverimage, default_url: "no-cover.png"
  validates_attachment_content_type :coverimage, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  has_many :posts,
    class_name: :Post,
    primary_key: :id,
    foreign_key: :user_id

  has_many :received_posts,
    class_name: :Post,
    primary_key: :id,
    foreign_key: :receiver_id

  has_many :friends,
    class_name: :Friendship,
    primary_key: :id,
    foreign_key: :sender_id

  has_many :comments,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :user_id

  has_many :likes,
    class_name: :Like,
    primary_key: :id,
    foreign_key: :user_id

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def self.search(search_string)
    User.where("LOWER(CONCAT(first_name, last_name)) LIKE LOWER('%#{search_string}%') AND ? != '' ", search_string)
  end

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    return nil unless @user && @user.valid_password?(password)
    @user
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
