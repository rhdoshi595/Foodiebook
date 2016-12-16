@friendships.each do |friendship|
  json.set! friendship.sender_id do
    json.partial! 'api/friendships/friendship', friendship: friendship
  end
end
