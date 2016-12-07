import { connect } from 'react-redux';
import Greeting from './greeting';
import { signOut } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => {
  return {currentUser: session.currentUser};
}

const mapDispatchToProps = dispatch => {
  return {signOut: () => dispatch(signOut())};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
