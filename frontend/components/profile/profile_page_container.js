import { connect } from 'react-redux';
import { fetchProfile, updateProfile } from '../../actions/profile_actions';
import { findFriend, createFriend, removeFriend, acceptFriend } from '../../actions/friendship_actions';
import { fetchPosts } from '../../actions/post_actions';
import ProfilePage from './profile_page';

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    currentUser: state.session.currentUser,
    posts: state.posts,
    friendship: state.friendship
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProfile: (id) => dispatch(fetchProfile(id)),
  updateProfile: (data) => dispatch(updateProfile(data)),
  findFriend: (friendUserId) => dispatch(findFriend(friendUserId)),
  createFriend: (friendUserId) => dispatch(createFriend(friendUserId)),
  removeFriend: (friendshipId) => dispatch(removeFriend(friendshipId)),
  acceptFriend: (friendshipId) => dispatch(acceptFriend(friendshipId)),
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
