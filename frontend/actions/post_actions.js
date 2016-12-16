import * as PostAPIUtil from '../util/post_api_util';

export const CREATE_POST = "CREATE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const DELETE_POST = "DELETE_POST";

export const createPost = (post, receiverId) => {
  return (dispatch) => {
    return PostAPIUtil.createPost(post, receiverId).then(
      (post) => dispatch(receivePost(post))
    );
  };
};

export const fetchPosts = (userId) => {
  return (dispatch) => {
    return PostAPIUtil.fetchPosts(userId).then(
      (posts) => dispatch(receivePosts(posts))
    );
  };
};

export const fetchPost = (postId) => {
  return (dispatch) => {
    return PostAPIUtil.fetchPost(postId).then(
      (post) => dispatch(receivePost(post))
    );
  };
};

export const editPost = (postData, postId) => {
  return (dispatch) => {
    return PostAPIUtil.editPost(postData, postId).then(
      (post) => dispatch(receivePost(post))
    );
  };
};

export const removePost = (postId) => {
  return (dispatch) => {
    return PostAPIUtil.removePost(postId).then(
      () => dispatch(deletePost(postId))
    );
  };
};

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId
  };
};

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts
  };
};

export const receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    post: post
  };
};
