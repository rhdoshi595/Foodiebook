#Schema Information

## profiles
column name    | data type | details
---------------|-----------|--------------------------------------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users), indexed
first_name     | string    | not null
last_name      | string    | not null
birthday       | date      | not null
gender         | string    | not null
profile_img    | string    |
background_img | string    |
workplace      | string    |
school         | string    |
current_city   | string    |
hometown       | string    |
relationship   | string    |

## users
column name    | data type | details
---------------|-----------|--------------------------------------------------
id             | integer   | not null, primary key
email          | string    | not null, indexed, unique
password_digest| string    | not null
session_token  | string    | not null, indexed, unique

## friendships
column name    | data type | details
---------------|-----------|--------------------------------------------------
id             | integer   | not null, primary key
sender_id      | integer   | not null, foreign key (references users), indexed
profile_id     | integer   | not null, foreign key (references profiles), indexed
status         | string    | not null

## posts
column name    | data type | details
---------------|-----------|--------------------------------------------------
id             | integer   | not null, primary key
author_id      | integer   | not null, foreign key (references users), indexed
receiver_id    | integer   | not null, foreign key (references users), indexed
body           | string    | not null

## comments
column name    | data type | details
---------------|-----------|--------------------------------------------------
id             | integer   | not null, primary key
author_id      | integer   | not null, foreign key (references users), indexed
post_id        | integer   | not null, foreign key (references posts), indexed
date           | datetime  | not null
type           | string    | not null
text           | text      | not null

## post_likes
column name    | data type | details
---------------|-----------|--------------------------------------------------
id             | integer   | not null, primary key
author_id      | integer   | not null, foreign key (references users), indexed
post_id        | integer   | not null, foreign key (references posts), indexed

## comment_likes
column name    | data type | details
---------------|-----------|--------------------------------------------------
id             | integer   | not null, primary key
author_id      | integer   | not null, foreign key (references users), indexed
comment_id     | integer   | not null, foreign key (references comments), indexed

## activities
column name    | data type | details
---------------|-----------|--------------------------------------------------
id             | integer   | not null, primary key
sender_id      | integer   | not null, foreign key (references users), indexed
receiver_id    | integer   | not null, foreign key (references users), indexed
type           | string    | not null
date           | datetime  | not null

## photos
column name    | data type | details
---------------|-----------|--------------------------------------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users), indexed
title          | string    | not null
description    | text      |
