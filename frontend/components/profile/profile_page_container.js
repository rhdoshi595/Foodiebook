import { connect } from 'react-redux';
import { fetchProfile } from '../../actions/profile_actions';
import ProfilePage from './profile_page';

const mapStateToProps = (state) => ({
  profile: state.profile
});

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: (id) => dispatch(fetchProfile(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
