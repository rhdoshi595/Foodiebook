import React from 'react';
import { Link } from 'react-router';
import TimeAgo from 'react-timeago';
import PostComments from './post_comments_container';
import NewPostContainer from './new_post_container';

class PostIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: ''
    };
    this.editPost = this.editPost.bind(this);
    this.removePost = this.removePost.bind(this);
  }

  componentDidMount(){
    this.props.fetchPosts(parseInt(this.props.userId));
  }

  componentWillUpdate(nextProps){
    if(this.props.userId !== nextProps.userId){
      
      this.props.fetchPosts(parseInt(nextProps.userId));
    }
  }

  editPost(event, id){
    let postBody = $(event.target).parents().eq(4).find('.post-body-edit');
    this.setState({
      body: postBody[0].innerHTML
    });
    postBody.toggleClass('edit-hidden');
  }

  removePost(postId) {
    this.props.removePost(postId).then(
      () => { this.props.fetchPosts(parseInt(this.props.userId));}
    );
  }

  render() {

    let posts = this.props.posts;
    let postKeys = this.props.postKeys;
    const arrow = (<strong className="receiver-user-arrow">▶</strong>);

    const postItems = postKeys.map(postId => {
      let receiverLink = () => {
        if (posts[postId].receiver){
          return (
            <div className="receiver-in-post">
              {arrow}<Link to={`/users/${posts[postId].receiver.id}`}>{posts[postId].receiver.first_name} {posts[postId].receiver.last_name}</Link>
            </div>
          );
        }
      };

      let submitEdit = (event, postId) => {
        this.props.editPost({body: this.state.body}, postId);
        $(event.target).parents().eq(2).find('.post-body-edit').toggleClass('edit-hidden');

      };

      let handleInput = (event) => {
        this.setState({
          body: event.currentTarget.value
        });
      };

      let selectCommentBox = (e) => {
        $(e.target).parent().parent().children().siblings().find('input').focus();
      };

      let postImage = () => {
        if(this.props.currentUser !== null && posts[postId].image){
          return (<img className="post-image" src={posts[postId].image}/>);
        }
      };

      let postBody = () => {
        if(this.props.currentUser !== null && posts[postId].user.id === this.props.currentUser.id){
          return (
            <div className="post-body-text group">
              <div className="post-body-edit">
                {posts[postId].body}
              </div>
              <div className="post-body-edit edit-hidden">
                <textarea value={this.state.body}
                  onChange={(event) => handleInput(event)}>
                </textarea>
                <div className="post-body-edit-done"
                  onClick={(event) => submitEdit(event, postId)}>Edit</div>
              </div>
            </div>
          );
        } else {
          return (posts[postId].body);
        }
      };

      const style = {backgroundImage: `url("${posts[postId].user.profileavatar}")`};

      let editDeleteDropdown = () => {

        if(this.props.currentUser !== null && posts[postId].user.id === this.props.currentUser.id){
          return (
            <div className="post-dropdown">
              <p>Edit/Delete</p>
              <div className="post-dropdown-options">
                <ul>
                  <li onClick={(event) => {this.editPost(event, postId);}}>Edit</li>
                  <li onClick={() => {this.removePost(postId);}}>Delete</li>
                </ul>
              </div>
            </div>
          );
        }

      };

      return (
        <div key={postId} className="body-content-col">
          <div className="post-content-post">
            <div className="post-content-header group">
              <div className="post-content-thumb" style={style}></div>
              <div className="post-content-header-name group">
                <Link className="author-of-post" to={`/users/${posts[postId].user.id}`}>{posts[postId].user.first_name} {posts[postId].user.last_name}</Link>
                {receiverLink()}
                <br/>
                <div className="post-content-header-timestamp">
                  <TimeAgo date={posts[postId].created_at} minPeriod="60" />
                </div>
              </div>
              {editDeleteDropdown()}
            </div>

            <div className="post-content-body">
              {postBody()}
              {postImage()}
            </div>

            <div className="post-content-actions group">
              <div className="post-content-actions-comment" onClick={selectCommentBox}>
                Comment
              </div>
            </div>

            <div className="post-content-footer">
              <div className="post-content-comments">
                <PostComments comments={posts[postId].comments} postId={postId}/>
              </div>
            </div>

          </div>
        </div>
      );
    });


    return (
      <div>
        <NewPostContainer userId={this.props.userId} />
        {postItems}
      </div>
    );
  }

}

export default PostIndex;
