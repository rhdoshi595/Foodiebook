import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import ProfilePageContainer from './profile/profile_page_container';

class Root extends React.Component{
  constructor(props){
    super(props);
  }

  _ensureLoggedIn(nextState, replace) {
    const currentUser = store.getState().session.currentUser;
    if(!currentUser){
      replace('/signin');
    }
  }

  _redirectIfLoggedIn(_, replace){
    if (store.getState().session.currentUser) {
      replace('/');
    }
  }


  render () {
    return (
      <Provider store={ store }>
        <Router history={ hashHistory }>
          <Route path='/signin' component={ SessionFormContainer } onEnter={this._redirectifLoggedin}/>
          <Route path="/" component={App} onEnter={this._ensureLoggedIn}>
            <Route path="users/:userId" component={ ProfilePageContainer } />
          </Route>
        </Router>
      </Provider>
    );
  }
}


export default Root;

// <IndexRoute component={ GreetingContainer } onEnter={this._ensureLoggedIn}/>
