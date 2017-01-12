export const findFriend = (friendUserId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${friendUserId}/friendships`
  });
};

export const createFriend = (friendUserId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${friendUserId}/friendships`
  });
};

export const removeFriend = (friendshipId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/friendships/${friendshipId}`
  });
};

export const acceptFriend = (friendshipId) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/friendships/${friendshipId}`
  });
};

export const findFriendRequests = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/friendships'
  });
};
