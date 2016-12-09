export const fetchProfile = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};
