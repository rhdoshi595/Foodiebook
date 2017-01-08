json.extract! post, :id, :body, :created_at
if post.image.original_filename
  json.image asset_path(post.image)
end
json.user do
  json.partial! 'api/users/user', user: post.user
end
if post.receiver
  json.receiver do
    json.partial! 'api/users/user', user: post.receiver
  end
end
if post.comments
  json.comments do
    post.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
        json.user_pic comment.user.profileavatar.url
        json.user_id comment.user.id
        json.user_first_name comment.user.first_name
        json.user_last_name comment.user.last_name
      end
    end
  end
end
if post.likes
  json.likes do
    post.likes.each do |like|
      json.set! like.id do
        json.likeId like.id
        json.userId like.user.id
        json.user_first_name like.user.first_name
        json.user_last_name like.user.last_name
      end
    end
  end
end
