import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  constructor (props){
    super(props);
    this.signOut = this.signOut.bind(this);
    this.currentUserFirstName = this.currentUserFirstName.bind(this);
  }

  signOut()  {
    this.props.signOut().then(
      () => this.props.router.push('/signin')
    );
  }

  currentUserFirstName() {
    if (this.props.currentUser) {
      return (<Link to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.first_name}</Link>);
    } else {
      return (<div></div>);
    }
  }

  render () {
    return (
      <nav className="global-navbar">
        <div className="navbar-container group">

          <div className="navbar-header">
            <Link to="/" className="navbar-logo">
              foodiebook
            </Link>
          </div>


          <div className="navbar-components group">
            <div>{this.currentUserFirstName()}</div>
            <input type="button" value="Log Out" onClick={this.signOut} className="navbar-signout-button"/>
          </div>

        </div>
      </nav>
    );
  }

}
// {signedIn()}
export default Greeting;
