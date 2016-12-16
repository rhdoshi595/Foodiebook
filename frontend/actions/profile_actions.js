import * as ProfileAPIUtil from '../util/profile_api_util';

export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

export function fetchProfile(id) {
  return (dispatch) => {
    return ProfileAPIUtil.fetchProfile(id).then(
      profile => {
        return dispatch(receiveProfile(profile));
      }
    );
  };
}

export function updateProfile(data, id) {
  return (dispatch) => {
    return ProfileAPIUtil.updateProfile(data, id).then(
      (profile) => dispatch(receiveProfile(profile))
    );
  };
}

export const receiveProfile = (profile) => {
  return {
    type: RECEIVE_PROFILE,
    profile
  };
};
