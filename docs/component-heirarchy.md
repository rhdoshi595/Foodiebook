## Component Hierarchy

* **App**
  * **LoginPage** (if not logged in)
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
    * Profile post index
      * New post form
      * profile post index item
    * **Profile about container**
      * Profile about
      * Friend index
        * friend index item
      * Profile photos index
        * profile photo index item
        * profile add photo form
    * **Profile Edit**
      * Profile edit form
    * **Profile Friends**
      * Friend index
        * Friend index item

## Routes

| Path        | Component          |
|-------------|--------------------|
|"/login"     | LoginPage          |
|"/"          | NewsfeedContainer  |
|"/users/:userId" | Profile Container |
|"users/:userId/about" | Profile About |
|"users/:userId/edit" | Profile Edit  |
|"users/:userId/friends"| Profile Friends |
|"users/:userId/photos"| Profile Photos |
|"/users/:userId/photos/add-photo"| Add Photo |

NewsfeedContainer is the IndexRoute - default content to be displayed      
