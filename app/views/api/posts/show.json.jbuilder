json.set! @post.id do
  json.extract! @post, :body, :created_at
  json.author do
    json.partial! 'api/users/user', user: @post.user
  end
end
