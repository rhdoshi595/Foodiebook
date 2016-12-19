# Foodiebook

[LIVE](http://foodiebook.us/)

[Project proposal circa 12/3/16](docs/README.md)

Foodiebook is a clone of Facebook built using Ruby, Rails, React, Redux, and PostgreSQL.
The purpose of this project is to solidify what we learned over the past several months at
App Academy NYC. The clone features fake profiles from the show Bob's Burgers.

![foodiebook](/docs/demo-pics/login-signup-page.png)

## Features & Implementation

### Form validation
The user's form inputs are validated on the back-end. Validations check for password length and unique email addresses. Passwords are hashed using [BCrypt](https://en.wikipedia.org/wiki/Bcrypt) before being stored on the server.

![foodiebook](/docs/demo-pics/login-errors.png)

### Profiles & Friending
 Users can post on their profiles and upload different profile avatars and cover images. Users can also change their profile information on this page. Users are notified of friend requests when they go to another user's profile page who has sent them a friend request. They can accept or ignore the requests while they are on that profile. Users cannot view posts belonging to users on their newsfeed with whom they are not yet friends. Friendships are maintained with a table that has a status column. ActiveRecord queries is used for creating and searching for a userOne:userTwo 'friendship' and to ensure the relationship userTwo:userOne does not exist as well.

![foodiebook](/docs/demo-pics/profile.png)
![foodiebook](/docs/demo-pics/posting.png)
![foodiebook](/docs/demo-pics/friend-request1.png)
![foodiebook](/docs/demo-pics/friend-request2.png)
![foodiebook](/docs/demo-pics/friend-request3.png)

### News feed & Posts
A user's news feed is filtered by only displaying posts belonging to the user and his/her friends. The newsfeed begins with a post form from where the current user can post what they wish(including images).  These posts are fetched using several chained ActiveRecord queries. An includes method is chained to the ActiveRecord relationship to reduce the total number of queries made to the server.

```ruby
# Ruby - app/controllers/api/posts_controller.rb
Post.where("receiver_id = ? or (receiver_id IS NULL and user_id = ?)", params[:user_id], params[:user_id])
  .where(user_id:Friendship.active_friendships(current_user))
  .includes(:user, :receiver, {comments: [:user]})
  .order("created_at DESC")
```

![foodiebook](/docs/demo-pics/newsfeed.png)

### Comments
Comments can be added to posts with a single keystroke. Comments have an 'enter/return' listener to know when to submit the form. The comment tables have columns which reference a user and a post. Thus a comment belongs to an author and a post.

![foodiebook](/docs/demo-pics/post-comments.png)

### Post editing
Posts can be edited and deleted, features available only to the author of the post. This is accomplished on the frontend during the render by comparing the post author and the current user.

![foodiebook](/docs/demo-pics/edit-delete.png)

### Photo upload
Photo upload uses the [paperclip gem](https://github.com/thoughtbot/paperclip) to manage attachments. Uploaded pictures are stored in an [Amazon AWS S3](https://aws.amazon.com/) server.

```javascript
// javascript - frontend/components/userprofile.jsx
uploadProfileAvatar(event){
  let file = event.currentTarget.files[0];
  var formData = new FormData();
  formData.append("user[profileavatar]", file);
  this.props.updateProfile(formData);
}
```

Attachments can be associated with both users (cover photo, profile picture) and posts (post attachment).

![foodiebook](/docs/demo-pics/upload-photo.png)
