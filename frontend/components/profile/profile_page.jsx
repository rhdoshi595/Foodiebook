import React from 'react';

class ProfilePage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProfile({id: parseInt(this.props.params.userId)});
  }

  render (){
    return(
      <div>
        <section className='profile-page-content group'>
          <header className='profile-header'>

            <div className="profile-cover-image" style={{"backgroundImage":"url(http://pxn.ca/moped/teddy_moped.png)"}}>
              <div className="profile-cover-info">
                <div className="profile-cover-name">{this.props.profile.profile.first_name} {this.props.profile.profile.last_name}</div>
              </div>

              <div className="profile-cover-button">
                <div className="profile-cover-friend-button">Add Friend</div>
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
                <p>{this.props.profile.profile.first_name} {this.props.profile.profile.last_name}</p>
                <p>{this.props.profile.profile.email}</p>
            </div>

            <div className="profile-left-sidebar-photos">
              <p>photos here</p>
            </div>
          </div>

          <div className="profile-posts">
            <p>posts here</p>
          </div>
        </section>


      </div>
    );
  }
}

export default ProfilePage;
