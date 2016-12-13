import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';
import FriendshipReducer from './friendship_reducer';
import PostReducer from './post_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  profile: ProfileReducer,
  friendship: FriendshipReducer,
  posts: PostReducer
});

export default RootReducer;
