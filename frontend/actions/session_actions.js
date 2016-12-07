import * as APIUtil from '../util/session_api_util';

export const SIGNUP_USER = "SIGNUP_USER";
export const SIGNIN_USER = "SIGNIN_USER";
export const SIGNOUT_USER = "SIGNOUT_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export function signUp(user) {
  return (dispatch) => {
    return APIUtil.signUp(user).then(
      user => dispatch(receiveCurrentUser(user)),
      error => dispatch(receiveErrors(error.responseJSON))
    );
  };
}

export function signIn(user) {
  return (dispatch) => {
    return APIUtil.signIn(user).then(
      user => dispatch(receiveCurrentUser(user)),
      error => dispatch(receiveErrors(error.responseJSON))
    );
  };
}

export function signOut() {
  return (dispatch) => {
    return APIUtil.signOut().then(
      user => dispatch(receiveCurrentUser(null))
    );
  };
}

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
