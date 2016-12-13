import { connect } from 'react-redux';
import { fetchProfile } from '../../actions/profile_actions';
import { findFriend, createFriend, removeFriend, acceptFriend } from '../../actions/friend_actions';
import ProfilePage from './profile_page';

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  currentUser: state.session.currentUser,
  posts: state.posts,
  friendship: state.friendship
});

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: (id) => dispatch(fetchProfile(id)),
  findFriend: (friendId) => dispatch(findFriend(friendId)),
  createFriend: (friendId) => dispatch(createFriend(friendId)),
  removeFriend: (friendshipId) => dispatch(removeFriend(friendshipId)),
  acceptFriend: (friendshipId) => dispatch(acceptFriend(friendshipId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
