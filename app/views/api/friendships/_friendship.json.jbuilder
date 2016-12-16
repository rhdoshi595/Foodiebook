json.extract! friendship, :id, :sender_id, :replier_id, :status
json.sender do
  json.partial! 'api/users/user', user: friendship.sender
end
json.replier do
  json.partial! 'api/users/user', user: friendship.replier
end
