# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session/new`

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/`
- `GET /api/users/:id`
  - Returns all user information for a specific user

### Profiles

- `GET /api/profiles/:id`
  - Returns all profile information of specific user
- `POST /api/profiles`
  - Create new profile upon completion of signup
- `PATCH /api/profiles/:id`
  - Checks that current_user can only edit their own profile

### Friendships
- `GET /api/friendships`: returns all friendships
- `POST /api/friendships`: create a new friendship
- `PATCH /api/friendships/:id`: update a friendship(status)
- `DELETE /api/friendships/:id`: remove a friendship

### Friends

- `GET /api/friends`: get a list of all of a user's friends

### Posts

- `GET /api/posts`
  - Pass params with the user whose posts we're concerned with
  - Returns all posts on a user's profile page
- `POST /api/posts`: creates a new post on a user's page
  - Pass params with the receiver of the post
- `GET /api/posts/:id`: gets a particular post
- `PATCH /api/posts/:id`: updates a particular post
- `DELETE /api/posts/:id`: deletes a post
  - Only the author or the receiver can delete a post

### Newsfeed
- `GET /api/newsfeed`
  - Returns most recent posts that are on friends' profiles or own profile.

### Comments

- A post's comments will be included in the post show template
- `GET /api/comments`: returns all comments on a post
- `POST /api/comments`: create a new comment on a post
- `PATCH /api/comments/:commentId`: update a comment on a post
  - Checks if specific user is the author
- `DELETE /api/comments/:commentId`: remove a comment from post
  - Allows either the comment author or the post author to delete a post

## BONUS

### Likes - Posts

- A post's likes will be included in the post show template
- `GET /api/likes`: returns the number of likes on a post
- `POST /api/likes`: create a new like on a post
- `DELETE /api/likes/:likeId`: removes a like from a post

### Likes - Comments

- A comment's likes will be included in the comment show template
- `GET /api/likes`: returns the number of likes on a comment
- `POST /api/likes`: create a new like on a comment
- `DELETE /api/likes/:likeId`: removes a like from a comment

### Photos

- `GET /api/photos`
- `POST /api/photos`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`
