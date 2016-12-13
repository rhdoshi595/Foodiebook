import { CREATE_POST, RECEIVE_POSTS, RECEIVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({});

const PostReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POSTS:
      return Object.assign({}, state, action.posts);
    case RECEIVE_POST:
      return Object.assign({}, state, action.post);
    default:
      return state;
  }
};

export default PostReducer;
