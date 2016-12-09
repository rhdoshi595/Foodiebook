import * as ProfileAPIUtil from '../util/profile_api_util';

export const FETCH_PROFILE = "FETCH_PROFILE";

export function fetchProfile({id}) {
  return (dispatch) => {
    return ProfileAPIUtil.fetchProfile(id).then(
      profile => dispatch(receiveProfile(profile))
    );
  };
}

export const receiveProfile = (profile) => {
  return {
    type: FETCH_PROFILE,
    profile
  };
};
