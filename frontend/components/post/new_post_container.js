import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import NewPost from './new_post';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPost: (post, receiverId) => dispatch(createPost(post, receiverId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);
