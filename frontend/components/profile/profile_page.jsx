import React from 'react';
import PostIndexContainer from '../post/post_index_container';


class ProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.createFriend = this.createFriend.bind(this);
    this.acceptFriend = this.acceptFriend.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
  }

  componentDidMount(){
    this.props.fetchProfile({id: parseInt(this.props.params.userId)});

  }

  componentWillUpdate(nextProps){
    if(this.props.params.userId !== nextProps.params.userId){
      this.props.fetchProfile({id: parseInt(this.props.params.userId)});

    }
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

    if (this.props.friendship.id){
      if(this.props.friendship.status === "friended"){
        return (<div className="profile-cover-friend-button" onClick={this.removeFriend}>Unfriend</div>);
      } else {
        if (this.props.friendship.sender_id === this.props.params.userId) {
          return(<div className="profile-cover-friend-button" onClick={this.acceptFriend}>Accept Friend Request</div>);
        } else {
          return(<div className="profile-cover-friend-button" onClick={this.removeFriend}>Unanswered</div>);
        }
      }
    } else {
      if(this.props.currentUser){
        if (this.props.params.userId !== this.props.currentUser.id){
          return (<div className="profile-cover-friend-button" onClick={this.createFriend}> Add Friend</div>);
        }
      }
    }
    // return <h1>WOWOWOOWOWOW</h1>;
  }

  introUser() {
    let birthday, currentCity, hometown, relationshipStatus, workplace,
        school;
    if (this.props.profile !== {}){
      if(this.props.profile.birthday){
        birthday = (<li>Birthday: {this.props.profile.birthday}</li>);
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
        relationshipStatus = (<li>{this.props.profile.relationship_status}</li>);
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
      return (<div>test</div>);
    }
  }



  render (){
    let name = this.props.profile ? `${this.props.profile.first_name} ${this.props.profile.last_name}` : '';

    return(
      <div>
        <section className='profile-page-content group'>
          <header className='profile-header'>

            <div className="profile-cover-image" style={{"backgroundImage":"url(http://pxn.ca/moped/teddy_moped.png)"}}>
              <div className="profile-cover-info">
                <div className="profile-cover-name">{name}</div>
              </div>

              <div className="profile-cover-button">
                {this.friendButton()}
              </div>
            </div>

            <div className="profile-header-bottom">
              <div className="profile-image">
                <div className="profile-image-picture" style={{"backgroundImage":"url(https://pbs.twimg.com/media/CQoziibWsAAZqqf.jpg)"}}></div>
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

            <div className="profile-left-sidebar-photos">
              <p>photos here</p>
            </div>
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
