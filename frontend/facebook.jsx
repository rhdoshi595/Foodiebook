import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { getProfile } from './actions/user_actions';
// import { fetchUser } from './util/user_api_util';
// import * as SessionAPIUtil from './util/session_api_util';
//
// window.signup = SessionAPIUtil.signup;
// window.signIn = SessionAPIUtil.signIn;
// window.signOut = SessionAPIUtil.signOut;
// window.fetchUser = fetchUser;
// window.getProfile = getProfile;

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
   const preloadedState = { session: { currentUser: window.currentUser } };
   store = configureStore(preloadedState);
  } else {
   store = configureStore();
  }
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store }/>, root);
});
