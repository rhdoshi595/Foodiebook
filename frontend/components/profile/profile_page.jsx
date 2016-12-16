import React from 'react';
import PostIndexContainer from '../post/post_index_container';
import GreetingContainer from '../greeting/greeting_container';

class ProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl: "",
      imageFile: null,
      friendshipId: null
    };
    this.createFriend = this.createFriend.bind(this);
    this.acceptFriend = this.acceptFriend.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
    this.editForm = this.editForm.bind(this);
    this.submitProfileEdit = this.submitProfileEdit.bind(this);
    this.saveEditButton = this.saveEditButton.bind(this);
    this.uploadProfileAvatar = this.uploadProfileAvatar.bind(this);
    this.uploadCoverImage = this.uploadCoverImage.bind(this);
    this.updateCoverImageButton = this.updateCoverImageButton.bind(this);
  }

  componentDidMount(){
    this.props.fetchProfile(parseInt(this.props.params.userId));
    this.props.findFriend(parseInt(this.props.params.userId));
  }

  componentWillUpdate(nextProps) {
    if (this.props.params.userId !== nextProps.params.userId) {
      this.props.fetchProfile(parseInt(nextProps.params.userId));
      this.props.findFriend(nextProps.params.userId);
    }
  }

  uploadProfileAvatar(event){
    let file = event.currentTarget.files[0];
    var formData = new FormData();
    formData.append("user[profileavatar]", file);
    this.props.updateProfile(formData);
  }

  updateProfileAvatarButton() {
    if (this.props.currentUser) {
      if (parseInt(this.props.params.userId) === this.props.currentUser.id) {
        return (
          <div className="profile-avatar-edit" onClick={ () => {
              $('#profile-avatar-input').click();
            }}>
            <div className='update-button'>Update
              <form className="profile-avatar-form" >
                <input id="profile-avatar-input"
                  type="file"
                  name=""
                  value=""
                  onChange={this.uploadProfileAvatar}
                  />
              </form>
            </div>
          </div>
        );
      } else {
        return (<div></div>);
      }
    } else {
      return (<div></div>);
    }
  }

  uploadCoverImage(event){
    let file = event.currentTarget.files[0];
    var formData = new FormData();
    formData.append("user[coverimage]", file);
    this.props.updateProfile(formData);
  }

  updateCoverImageButton(){
    return (
      <div className="profile-cover-edit" onClick={ () => {
          $('#profile-cover-input').click();
        }}>
        <div>Upload Cover Photo</div>
        <form className="profile-cover-form">
          <input id="profile-cover-input"
            type="file"
            name=""
            value=""
            onChange={this.uploadCoverImage}
            />
        </form>
      </div>
    );
  }

  createFriend(){
    this.props.createFriend(this.props.params.userId);
  }

  acceptFriend(){
    this.props.acceptFriend(this.props.friendship.id);
  }

  removeFriend(){
    this.props.removeFriend(this.props.friendship.id);
  }

  friendButton(){
    if(this.props.friendship){
      if(this.props.friendship.status === "friended") {
        //if current user and other user have friendship
        //then unfriend button should render on friend profile page
        return (
          <div className="friending-button" onClick={ this.removeFriend }>Unfriend</div>
        );
      } else {
        if(parseInt(this.props.friendship.sender_id) === parseInt(this.props.params.userId)){
          //if current user has been sent a friend request from user whose
          //profile is being visited so accept friend ship button
          return (
            <div className="friending-button" onClick={this.acceptFriend}>Accept Friend Request</div>
          );
        } else {
          return (
            <div className="friending-button" onClick={this.removeFriend}>Unanswered</div>
          );
        }
      }
    } else {
      if(this.props.currentUser){//if current user
        if(parseInt(this.props.params.userId) === this.props.currentUser.id){
          //if on current user's profile page
          return this.updateCoverImageButton();
        } else {
          //if on someone else's profile page if not in friendship table
          return (<div className="friending-button" onClick={ this.createFriend }>Add Friend</div>);
        }
      }
    }
  }

  introUser() {
    let birthday, currentCity, hometown, relationshipStatus, workplace,
        school;
    if (this.props.profile.id){
      if(this.props.profile.birthday){
        birthday = (<li>Birthday: {this.props.profile.birthday.slice(5,10)}</li>);
      }
      if(this.props.profile.current_city){
        currentCity = (<li>Lives in {this.props.profile.current_city}</li>);
      }
      if(this.props.profile.hometown){
        hometown = (<li>From {this.props.profile.hometown}</li>);
      }
      if(this.props.profile.school){
        school = (<li>Studied at {this.props.profile.school}</li>);
      }
      if(this.props.profile.workplace){
        workplace = (<li>Works at {this.props.profile.workplace}</li>);
      }
      if(this.props.profile.relationship_status){
        relationshipStatus = (<li>Relationship Status: {this.props.profile.relationship_status}</li>);
      }
      return (
        <ul className="intro-user">
          {birthday}
          {currentCity}
          {hometown}
          {school}
          {workplace}
          {relationshipStatus}
        </ul>
      );
    } else {
      return (<div>No information</div>);
    }
  }

  editForm(){
    if (this.props.profile.id && this.props.currentUser){
      if(this.props.profile.id === this.props.currentUser.id){
        return(
          <div className="profile-left-sidebar-photos">
            <h4>Edit Profile</h4>
            <ul>
              <li>School: <input type="text" name="school" defaultValue={this.props.profile.school} /></li>
              <li>Current City: <input type="text" name="current_city" defaultValue={this.props.profile.current_city} /></li>
              <li>Hometown: <input type="text" name="hometown" defaultValue={this.props.profile.hometown} /></li>
              <li>Workplace: <input type="text" name="workplace" defaultValue={this.props.profile.workplace} /></li>
              <li>Relationship: <input type="text" name="relationship_status" defaultValue={this.props.profile.relationship_status} /></li>
          </ul>
            <div className="save-edit-button">{this.saveEditButton()}</div>
          </div>
        );
      } else {
        return (<div className="profile-left-sidebar-photos"></div>);
      }
    } else {
      return (<div className="profile-left-sidebar-photos"></div>);
    }
  }
  submitProfileEdit() {

    var formData = new FormData();
    formData.append("user[hometown]", $('input[name="hometown"]').val());
    formData.append("user[relationship_status]", $('input[name="relationship_status"]').val());
    formData.append("user[school]", $('input[name="school"]').val());
    formData.append("user[workplace]", $('input[name="workplace"]').val());
    formData.append("user[current_city]", $('input[name="current_city"]').val());

    this.props.updateProfile(formData, this.props.currentUser.id);

  }

  saveEditButton() {
    if (this.props.profile) {
      if (this.props.currentUser.id === this.props.profile.id) {
        return (<div className="about-user-save" onClick={this.submitProfileEdit}>Save Changes</div>);
      }
    }
  }

  render (){
    if (!this.props.profile.id) return <p>Loading...</p>;
    let name = this.props.profile ? `${this.props.profile.first_name} ${this.props.profile.last_name}` : '';
    let userProfileAvatar = this.props.profile ? this.props.profile.profileavatar : "";
    let userProfileStyle = { backgroundImage: `url("${userProfileAvatar}")` };
    let userCoverImage = this.props.profile ? this.props.profile.coverimage : "";
    let userCoverStyle = { backgroundImage: `url("${userCoverImage}")` };
    // {this.friendButton()}
    return(
      <div>
        <GreetingContainer/>
        <section className='profile-page-content group'>
          <header className='profile-header'>

            <div className="profile-cover-image" style={userCoverStyle}>
              <div className="profile-cover-info">
                <div className="profile-cover-name">{name}</div>
              </div>

              <div className="profile-cover-button">
                {this.friendButton()}
              </div>
            </div>

            <div className="profile-header-bottom">
              <div className="profile-image">
                <div className="profile-image-picture" style={userProfileStyle}>
                  {this.updateProfileAvatarButton()}
                </div>
              </div>

              <ul className="profile-nav-bar">
                <li><a href="#">Timeline</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Friends</a></li>
                <li><a href="#">Photos</a></li>
              </ul>
            </div>

          </header>

          <div className="profile-left-sidebar">
            <div className="profile-left-sidebar-intro">
              <h4>Intro</h4>
              {this.introUser()}
            </div>

            {this.editForm()}
          </div>

          <div className="profile-posts">
            <PostIndexContainer userId={this.props.params.userId}/>
          </div>
        </section>

      </div>
    );
  }
}

export default ProfilePage;
