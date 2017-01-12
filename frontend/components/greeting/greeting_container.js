import { connect } from 'react-redux';
import Greeting from './greeting';
import { signOut } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import { searchUser } from '../../actions/profile_actions';
import { findFriendRequests, removeFriend, acceptFriend } from '../../actions/friendship_actions';


const mapStateToProps = ({ session, userSearch, friendRequests}) => {
  return {
    currentUser: session.currentUser,
    searchResults: userSearch,
    pendingRequests: friendRequests
  };
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    searchUser: (searchString) => dispatch(searchUser(searchString)),
    removeFriend: (friendshipId) => dispatch(removeFriend(friendshipId)),
    findFriendRequests: () => dispatch(findFriendRequests()),
    acceptFriend: (friendshipId) => dispatch(acceptFriend(friendshipId))
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting));
