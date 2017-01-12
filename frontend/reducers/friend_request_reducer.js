import { RECEIVE_FRIENDS } from '../actions/friendship_actions';

const FriendRequestReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_FRIENDS:
      return Object.assign({}, action.friends);
    default:
      return state;
  }
};

export default FriendRequestReducer;
