import { connect } from 'react-redux';
import Greeting from './greeting';
import { signOut } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import { searchUser } from '../../actions/profile_actions';

const mapStateToProps = ({ session, userSearch }) => {
  return {
    currentUser: session.currentUser,
    searchResults: userSearch
  };
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    searchUser: (searchString) => dispatch(searchUser(searchString))
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting));
