# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  sender_id  :integer          not null
#  replier_id :integer          not null
#  status     :string           default("unanswered"), not null
#  created_at :datetime
#  updated_at :datetime
#

class Friendship < ActiveRecord::Base
  validates :sender_id, presence: true
  validates :replier_id, presence: true
  validates :status, presence: true, inclusion: {in: ["unanswered", "friended"]}
  validates :sender_id, uniqueness: {scope: :replier_id}

  belongs_to :sender,
    class_name: :User,
    primary_key: :id,
    foreign_key: :sender_id

  belongs_to :replier,
    class_name: :User,
    primary_key: :id,
    foreign_key: :replier_id

  def self.pending_friendships(user)
    pending = Friendship
      .where("sender_id = #{user.id} OR replier_id = #{user.id}")
      .where("status = 'unanswered'")
      .pluck(:sender_id, :replier_id)
      .flatten
      .uniq

    pending
  end

  def self.requesting_friendships(user)
    pendings = Friendship
      .where("sender_id = #{user.id}")
      .where("status = 'unanswered'")
      .pluck(:replier_id)
      .uniq
    pendings
  end

  def self.requested_friendships(user)
    pendings = Friendship
      .where("replier_id = #{user.id}")
      .where("status = 'unanswered'")
      .pluck(:sender_id)
      .uniq
    pendings
  end

  def self.active_friendships(user)
    actives = Friendship
      .where("sender_id = #{user.id} OR replier_id = #{user.id}")
      .where("status = 'friended'")
      .pluck(:sender_id, :replier_id)
      .flatten
      .uniq

    actives
  end

  def self.find_friendship(user1, user2)
    user_one = user1.class == User ? user1.id : user1
    user_two = user2.class == User ? user2.id : user2

    sent = Friendship
      .where("sender_id = #{user_one} AND replier_id = #{user_two}")
    received = Friendship
      .where("sender_id = #{user_two} AND replier_id = #{user_one}")
    if sent.length > 0
      return sent.first
    elsif received.length > 0
      return received.first
    else
      return nil
    end
  end

  def self.friend_status(user1, user2)
    user_one = user1.class == User ? user1.id : user1
    user_two = user2.class == User ? user2.id : user2

    pendings = Friendship
      .where("sender_id = #{user_one} AND replier_id = #{user_two}")
    if pendings.length > 0
      if pendings.first.status == "unanswered"
        return "unanswered"
      elsif pendings.first.status == "friended"
        return "friends"
      end
    end
    requests = Friendship
      .where("sender_id = #{user_two} AND replier_id = #{user_one}")
    if requests.length > 0
      if requests.first.status == "unanswered"
        return "unanswered"
      elsif requests.first.status == "friended"
        return "friends"
      end
    end
    return nil
  end
end
