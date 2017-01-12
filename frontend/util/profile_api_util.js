export const fetchProfile = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};

export const updateProfile = (data, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: data,
    processData: false,
    contentType: false
  });
};

export const searchUser = (searchString) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users',
    data: {search: searchString}
  });
};
