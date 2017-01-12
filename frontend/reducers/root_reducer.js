import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';
import FriendshipReducer from './friendship_reducer';
import PostReducer from './post_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  profile: ProfileReducer,
  friendship: FriendshipReducer,
  posts: PostReducer,
  userSearch: SearchReducer
});

export default RootReducer;
