export const fetchComments = (postId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}/comments`
  });
};

export const addComment = (comment, postId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/posts/${postId}/comments`,
    data: { comment: comment }
  });
};

export const removeComment = (commentId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  });
};
