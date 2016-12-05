## Component Hierarchy

* **App**
  * **LoginPage**
    * New Session Form
    * Sign Up Form
    * Site explanation Container
  * Header (if logged in)
    * Friend Request index
      * Friend Request index item
    * Log out button
    * Message index (bonus)
      * Message index item
    * Notifications index (bonus)
      * Notifications index item
  * Newsfeed Container
    * Newsfeed index
      * New post form
      * Newsfeed index item
    * Newsfeed links sidebar
      * Newsfeed links sidebar item
    * Newsfeed ad sidebar
      * Newsfeed ad sidebar item
  * **Profile Container**
    * Profile Sidebar
      * Profile About
      * Photo index
        * Photo index item
      * Friend profile pictures index
        * Friend profile pictures index item
    * **Profile post index container**
      * New post form
      * profile post index item
    * **Profile about container**
      * Profile about
      * Friend index
        * friend index item
      * Profile photos index
        * profile photo index item
    * **Profile Edit**
      * Profile edit form
    * **Profile Friends**
      * Friend index
        * Friend index item

## Routes

* **component:** `App` **path:** `/`
  * **component:** `LoginPage` **path:** none
    * **component:** `NewSessionForm` **path:** create
    * **component:** `NewUserForm` **path:** create
  * **component:** `NewsfeedContainer` **path:** show
  * **component:** `ProfileContainer` **path:** show
  * **component:** `ProfileContainer` **path:** `users/:userId`
    * **component:** `ProfileTimeline` **path:** `users/:userId`
    * **component:** `ProfileAbout` **path:** `users/:userId/about`
    * **component:** `ProfileFriends` **path:** `users/:userId/friends`

NewsfeedContainer is the IndexRoute - default content to be displayed      
