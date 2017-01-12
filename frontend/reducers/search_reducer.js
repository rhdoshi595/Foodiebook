import { RECEIVE_SEARCH } from '../actions/profile_actions';

const defaultState = {};

const SearchReducer = (state = defaultState, action) => {
  switch(action.type){
    case RECEIVE_SEARCH:
      return action.profiles;
    default:
      return state;
  }
};

export default SearchReducer;
