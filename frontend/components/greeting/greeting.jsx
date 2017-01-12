import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      search: ''
    };

    this.signOut = this.signOut.bind(this);
    this.currentUserFirstName = this.currentUserFirstName.bind(this);
    this.startSearch = this.startSearch.bind(this);
    this.searchResults = this.searchResults.bind(this);
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

  preventEnter(event){
    event.preventDefault();
  }

  componentDidMount(){
    this.props.findFriendRequests();

    let searchResultDisplay = $(document).find('.search-results');

    $(document).find('.header-searchbar input').focus(() => {
      searchResultDisplay.removeClass('hide-results');
    });
    $(document).find('.header-searchbar input').blur(() => {
      window.setTimeout(() => {
        searchResultDisplay.addClass('hide-results');
      }, 500);
    });
  }

  startSearch(event){
    event.preventDefault();
    this.setState({
      search: event.currentTarget.value
    });
    this.props.searchUser(event.currentTarget.value);
  }

  searchResults() {
    if(Object.keys(this.props.searchResults).length){
      return Object.keys(this.props.searchResults).map((id) => {
        let style = {backgroundImage: "url("+this.props.searchResults[id].profileavatar+")"};
        return (
          <li key={id} className="group">
            <div className="search-result-photo" style={style}></div>
            <Link to={`/users/${id}`} className="search-name-link">
              <div className="search-result-name">
                {this.props.searchResults[id].first_name} {this.props.searchResults[id].last_name}
              </div>
            </Link>
          </li>
        );
      });
    } else {
      return ("no matches");
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

          <div className="searchbar-component">
            <form className="header-searchbar" onSubmit={this.preventEnter}>
              <input name=""
                     type="text"
                     value={this.state.search}
                     onChange={this.startSearch}
                     placeholder="Search Foodiebook">
              </input>
              <button><i className="material-icons">search</i></button>
              <div className="search-results hide-results">
                <ul>{this.searchResults()}</ul>
              </div>
            </form>
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
