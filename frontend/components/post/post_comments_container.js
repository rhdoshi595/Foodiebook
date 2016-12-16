import { connect } from 'react-redux';
import PostComments from './post_comments';
import { addComment } from '../../actions/comment_actions';
import { fetchPost } from '../../actions/post_actions';

const mapDispatchToProps = (dispatch) => ({
  addComment: (comment, postId) => dispatch(addComment(comment, postId)),
  fetchPost: (postId) => dispatch(fetchPost(postId))
});

export default connect(
  null,
  mapDispatchToProps
)(PostComments);
