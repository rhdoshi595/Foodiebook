import React from 'react';
import { Link } from 'react-router';

class PostComments extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: ''
    };
    this.allComments = this.allComments.bind(this);
    this.commentForm = this.commentForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  allComments() {
    if (this.props.comments){
      let comments = this.props.comments;
      let commentKeys = Object.keys(this.props.comments);
      return commentKeys.map((key) => {
        return (
          <div key={key} className="post-comment-article group">
            <div className="post-comment-text">
              <div className="post-comment-author">
                <Link to={`/users/${comments[key].user_id}`}>{comments[key].user_first_name} {comments[key].user_last_name}</Link>
              </div>
              <div className="post-comment-body">
                {comments[key].body}
              </div>
            </div>
          </div>
        );
      });
    }
  }

  commentForm (){
    return (
      <div className="post-comment-add-comment">
        <form className="post-comment-add-comment-form" onSubmit={this.handleSubmit}>
          <input type="text"
            name=""
            placeholder="Type up a comment"
            value={this.state.body}
            onChange={this.handleInput}
            />

        </form>
      </div>
    );
  }

  handleInput(event){
    this.setState({
      body: event.currentTarget.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addComment(this.state, this.props.postId)
      .then(() => this.props.fetchPost(this.props.postId))
      .then(() => this.resetForm());
  }

  resetForm(event){
    this.setState({
      body: ''
    });
  }

  render () {
    return (
      <div>
        {this.allComments()}
        {this.commentForm()}
      </div>
    );
  }

}

export default PostComments;
