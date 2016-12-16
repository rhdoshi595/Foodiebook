import { connect } from 'react-redux';
import { fetchPosts, createPost, fetchPost, editPost, removePost } from '../../actions/post_actions';
import PostIndex from './post_index';

const mapStateToProps = (state) => {
  function sortedKeys(posts){
    let keys = Object.keys(posts);
    let timestamps = [];
    let sortedIndices = [];
    for(let i = 0; i < keys.length; i += 1){
      let currentKey = keys[i];
      timestamps.push(posts[currentKey].created_at);
    }
    let sortedTimes = timestamps.slice(0).sort().reverse();
    for(let j = 0; j < sortedTimes.length; j += 1){
      sortedIndices.push(keys[timestamps.indexOf(sortedTimes[j])]);
    }
    return sortedIndices;
  }
  return {
    posts: state.posts,
    postKeys: sortedKeys(state.posts),
    currentUser: state.session.currentUser
  };

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPosts: (userId) => dispatch(fetchPosts(userId)),
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  createPost: (post) => dispatch(createPost(post)),
  editPost: (postData, postId) => dispatch(editPost(postData, postId)),
  removePost: (postId) => dispatch(removePost(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
