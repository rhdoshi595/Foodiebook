import { CREATE_POST, RECEIVE_POSTS, RECEIVE_POST, DELETE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({});

const PostReducer = (state = defaultState, action) => {

  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return Object.assign({}, state, {[action.post.id]: action.post});
    case DELETE_POST:
      const newPosts = Object.assign({}, state);
      delete newPosts[action.postId];
      return newPosts;
    default:
      return state;
  }
};

export default PostReducer;
