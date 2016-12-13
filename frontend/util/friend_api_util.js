export const findFriend = (friendId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${friendId}/friendships`
  });
};

export const createFriend = (friendId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${friendId}/friendships`
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
