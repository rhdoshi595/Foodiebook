import * as CommentAPIUtil from '../util/comment_api_util';

export const ADD_COMMENT = "ADD_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment: comment
});

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments: comments
});

export const fetchComments = (postId) => {
  return (dispatch) => {
    return CommentAPIUtil.fetchComments(postId).then(
      (comments) => dispatch(receiveComments(comments))
    );
  };
};

export const addComment = (comment, postId) => {
  return (dispatch) => {
    return CommentAPIUtil.addComment(comment, postId).then(
      (comment) => dispatch(receiveComment(comment))
    );
  };
};

export const removeComment = (commentId) => {
  return (dispatch) => {
    return CommentAPIUtil.removeComment(commentId).then(
      (comment) => dispatch(receiveComment(null))
    );
  };
};
