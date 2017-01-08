import * as LikeAPIUtil from '../util/like_api_util';

export const CREATE_LIKE = "CREATE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";

export const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like: like
  };
};

export const receiveLikes = (likes) => {
  return {
    type: RECEIVE_LIKES,
    likes: likes
  };
};

export const addLike = (postId) => {
  return (dispatch) => {
    return LikeAPIUtil.likePost(postId).then(
      (success) => dispatch(receiveLike(success))
    );
  };
};

export const removeLike = (likeId) => {
  return (dispatch) => {
    return LikeAPIUtil.deleteLike(likeId).then(
      (success) => dispatch(receiveLike(null))
    );
  };
};
