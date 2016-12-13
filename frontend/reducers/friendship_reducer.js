import { RECEIVE_FRIEND } from '../actions/friend_actions';

const defaultState = Object.freeze({});

const FriendshipReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_FRIEND:
      return Object.assign({}, action.friend);
    default:
      return state;
  }
};

export default FriendshipReducer;
