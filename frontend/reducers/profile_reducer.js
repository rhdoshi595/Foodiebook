import { RECEIVE_PROFILE } from '../actions/profile_actions';
import merge from 'lodash/merge';

const _nullProfile = Object.freeze({
  profile: {},
});

const ProfileReducer = (state = _nullProfile, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PROFILE:
      const newState = merge({}, _nullProfile, { profile: action.profile });
      return newState;
    default:
      return state;
  }
};

export default ProfileReducer;

// import { FETCH_USER } from '../actions/user_actions';
//
//
// const defaultState = Object.freeze({
//   user: {},
// });
//
// const UserReducer = (state = defaultState, action) => {
//   Object.freeze(state);
//   switch(action.type){
//     case FETCH_USER:
//       return state;
//     default:
//       return state;
//   }
// };
//
// export default UserReducer;


// in your props for your profile page container
// you should pass in state.user.user
//
// in your component youre going to call some function probably called fetchUser on component did mount
//
// profile_container
//
// mapDispatchToProps (dispatch) => ({
//
// })
