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


export const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: { post: post }
  });
};
