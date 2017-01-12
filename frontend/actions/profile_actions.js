import * as ProfileAPIUtil from '../util/profile_api_util';

export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

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

export function searchUser(searchString){
  return (dispatch) => {
    return ProfileAPIUtil.searchUser(searchString).then(
      (profiles) => dispatch(receiveSearch(profiles))
    );
  };
}

export const receiveProfile = (profile) => {
  return {
    type: RECEIVE_PROFILE,
    profile
  };
};

export const receiveSearch = (profiles) => {
  return {
    type: RECEIVE_SEARCH,
    profiles: profiles
  };
};
