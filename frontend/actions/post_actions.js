import * as PostAPIUtil from '../util/post_api_util';

export const CREATE_POST = "CREATE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";

export const createPost = (post) => {
  return (dispatch) => {
    return PostAPIUtil.createPost(post).then((post) => dispatch(receivePost(post)));
  };
};

export const fetchPosts = (userId) => {
  return (dispatch) => {
    return PostAPIUtil.fetchPosts(userId).then((posts) => dispatch(receivePosts(posts)));
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
