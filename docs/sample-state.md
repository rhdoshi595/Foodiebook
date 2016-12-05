```js
{
  currentUser: {
    id: 1,
    username: "rhdoshi595",
    email: "rhdoshi595@gmail.com",
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createProfile: {errors: ["body can't be blank"]},
    createPost: {errors: ["body can't be blank"]},
    createComment: {errors: ["body can't be blank"]}
  },
  currentProfile: {
    id: 1,
    user_id: 1,
    first_name: "Rahul",
    last_name: "Doshi",
    gender: "male",
    birthday: "05-11-1993",
    posts: {
      1: {
        id: 1
        profile_id: 2,
        author_id: 2,
        content: "what's up?",
        likes: {
          126: {
            id: 126,
            author_id: 40,
            post_id: 1,
            created_at: "12-05-2016"
          }
        }
        comments: [
          7: {
            id: 7,
            post_id: 1,
            author_id: 5,
            content: "nothing much",
            likes: {
              5: {
                id: 5,
                author_id: 40,
                comment_id: 7,
                created_at: "12-05-2016"
              }
            }
          }
        ]
      },
      4: {
        id: 4,
        profile_id: 23,
        author_id: 4,
        content: "Hello"
      }
    }
  },
  newsFeed: {
    activities: {
      51: {
        id: 83,
        type: "friendship",
        sender_id: 9,
        receiver_id: 5
      }
    }
  }
}
```
