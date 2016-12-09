import { connect } from 'react-redux';
import Greeting from './greeting';
import { signOut } from '../../actions/session_actions';
import { withRouter } from 'react-router';

const mapStateToProps = ({ session }) => {
  return {currentUser: session.currentUser};
}

const mapDispatchToProps = dispatch => {
  return {signOut: () => dispatch(signOut())};
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting));
