import * as FriendshipAPIUtil from '../util/friendship_api_util';

export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";

export const receiveFriend = (friend) => ({
  type: RECEIVE_FRIEND,
  friend: friend
});

export const receiveFriends = (friends) => ({
  type: RECEIVE_FRIENDS,
  friends: friends
});

export const findFriend = (friendUserId) => {
  return (dispatch) => {
    return FriendshipAPIUtil.findFriend(friendUserId).then(
      (friend) => dispatch(receiveFriend(friend))
    );
  };
};

export const createFriend = (friendUserId) => {
  return (dispatch) => {
    return FriendshipAPIUtil.createFriend(friendUserId).then(
      (friend) => dispatch(receiveFriend(friend))
    );
  };
};

export const removeFriend = (friendshipId) => {
  return (dispatch) => {
    return FriendshipAPIUtil.removeFriend(friendshipId).then(
      (friend) => dispatch(receiveFriend(null))
    );
  };
};

export const acceptFriend = (friendshipId) => {
  return (dispatch) => {
    return FriendshipAPIUtil.acceptFriend(friendshipId).then(
      (friend) => dispatch(receiveFriend(friend))
    );
  };
};
