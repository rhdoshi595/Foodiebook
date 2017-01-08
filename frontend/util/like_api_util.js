export function likePost(postId){
  return $.ajax({
    method: 'POST',
    url: `api/posts/${postId}/likes`
  });
}

export function deleteLike(likeId){
  return $.ajax({
    method: 'DELETE',
    url: `api/likes/${likeId}`
  });
}
