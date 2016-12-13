import * as FriendAPIUtil from '../util/friend_api_util';

export const RECEIVE_FRIEND = "RECEIVE_FRIEND";

export const receiveFriend = (friend) => ({
  type: RECEIVE_FRIEND,
  friend: friend
});

export const findFriend = (friendId) => {
  return (dispatch) => {
    return FriendAPIUtil.findFriend(friendId).then(
      (friend) => dispatch(receiveFriend(friend))
    );
  };
};

export const createFriend = (friendId) => {
  return (dispatch) => {
    return FriendAPIUtil.createFriend(friendId).then(
      (friend) => dispatch(receiveFriend(friend))
    );
  };
};

export const removeFriend = (friendshipId) => {
  return (dispatch) => {
    return FriendAPIUtil.removeFriend(friendshipId).then(
      (friend) => dispatch(receiveFriend(null))
    );
  };
};

export const acceptFriend = (friendshipId) => {
  return (dispatch) => {
    return FriendAPIUtil.acceptFriend(friendshipId).then(
      (friend) => dispatch(receiveFriend(friend))
    );
  };
};
