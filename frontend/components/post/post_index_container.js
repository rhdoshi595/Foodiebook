import { connect } from 'react-redux';
import { fetchPosts, createPost } from '../../actions/post_actions';
import PostIndex from './post_index';

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPosts: (userId) => dispatch(fetchPosts(userId)),
  createPost: (post) => dispatch(createPost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
