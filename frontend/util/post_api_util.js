export const fetchPosts = (userId) => {
  if (userId){
    return $.ajax({
      method: 'GET',
      url: `/api/users/${userId}/posts`
    });
  } else {
    return $.ajax({
      method: 'GET',
      url: '/api/posts'
    });
  }
};

export const fetchPost = (postId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`
  });
};

export const createPost = (post, receiverId) => {
  if (receiverId){
    return $.ajax({
      method: 'POST',
      url: `/api/users/${receiverId}/posts`,
      data: post,
      processData: false,
      contentType: false,
    });
  } else {
    
    return $.ajax({
      method: 'POST',
      url: `/api/posts`,
      data: post,
      processData: false,
      contentType: false,
    });
  }
};

export const editPost =  (postData, postId) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${postId}`,
    data: {post: postData}
  });
};

export const removePost = (postId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${postId}`
  });
};
