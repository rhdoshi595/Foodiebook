import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import * as SessionAPIUtil from './util/session_api_util';
//
// window.signup = SessionAPIUtil.signup;
// window.signIn = SessionAPIUtil.signIn;
// window.signOut = SessionAPIUtil.signOut;

document.addEventListener("DOMContentLoaded", () => {
  window.store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Foodiebook</h1>, root);
});
