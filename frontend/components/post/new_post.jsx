import React from 'react';

class NewPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: '',
      image: null
    };
    this.uploadPostPhoto = this.uploadPostPhoto.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetPostForm = this.resetPostForm.bind(this);
  }

  uploadPostPhoto(event){
    var reader = new FileReader();
    var file = event.currentTarget.files[0];
    reader.onloadend = function () {
      this.setState({image: file});
    }.bind(this);
    reader.readAsDataURL(file);
  }

  handleInput(event){
    let name = event.currentTarget.name;
    this.setState({
      [name]: event.currentTarget.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    var formData = new FormData();
    formData.append("post[body]", this.state.body);
    if(this.state.image){
      formData.append("post[image]", this.state.image);
    }
    this.props.createPost(formData, this.props.userId)
      .then(() => this.resetPostForm());
  }

  resetPostForm(){
    this.setState({
      body: '',
      image: null
    });
  }

  render(){
    let style;
    if (this.props.currentUser){
      style = {backgroundImage: `url("${this.props.currentUser.profileavatar}")`};
    }
    const attachedImageName = () => {
      if (this.state.image){
        const imageName = this.state.image.name.length > 20 ? this.state.image.name.substring(0,20)+"..." : this.state.image.name;
        return (
          <div className="new-post-attachment-name">
            Photo: {imageName}
          </div>
        );
      } else {
        return (<div></div>);
      }
    };
    return(
      <div className="body-content-col group">
        <form className="new-post-form" onSubmit={this.handleSubmit} action="index.html">
          <div className="new-post-padded group">
            <div className="new-post-photo-upload">
              <a onClick={ () => {$('#profile-pic-input').click();} }>Photo</a>
              <input id="profile-pic-input" type="file" onChange={this.uploadPostPhoto} />
            </div>
            <div className="new-post-thumb" style={style} />
            <textarea name="body"
              rows="2"
              cols="80"
              onChange={this.handleInput}
              value={this.state.body}
              placeholder="What's on your mind?"
              />
          </div>
          <div className="new-post-bottom group">
            <div className="new-post-additions">
              {attachedImageName()}
            </div>
            <button type="submit" name="">Post</button>
          </div>
        </form>

      </div>
    );
  }

}

export default NewPost;
