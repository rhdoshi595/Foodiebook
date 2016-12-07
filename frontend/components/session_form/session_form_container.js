import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUp, signIn, signOut, receiveErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router';

const mapStateToProps = ({ session }) => ({
  signedIn: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processSignUp: (user) => dispatch(signUp(user)),
  processSignIn: (user) => dispatch(signIn(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
