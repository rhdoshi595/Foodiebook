import { connect } from 'react-redux';
import PostComments from './post_comments';
import { addComment, removeComment } from '../../actions/comment_actions';
import { fetchPost } from '../../actions/post_actions';

const mapDispatchToProps = (dispatch) => ({
  addComment: (comment, postId) => dispatch(addComment(comment, postId)),
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  removeComment: (commentId) => dispatch(removeComment(commentId))
});

export default connect(
  null,
  mapDispatchToProps
)(PostComments);
