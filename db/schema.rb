# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161216082707) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "post_id",    null: false
    t.text     "body",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["post_id"], name: "index_comments_on_post_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "friendships", force: :cascade do |t|
    t.integer  "sender_id",                         null: false
    t.integer  "replier_id",                        null: false
    t.string   "status",     default: "unanswered", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "friendships", ["sender_id", "replier_id"], name: "index_friendships_on_sender_id_and_replier_id", unique: true, using: :btree

  create_table "posts", force: :cascade do |t|
    t.text     "body",               null: false
    t.integer  "user_id",            null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "receiver_id"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "posts", ["user_id"], name: "index_posts_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                      null: false
    t.string   "password_digest",            null: false
    t.string   "session_token",              null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "gender"
    t.datetime "birthday"
    t.string   "profile_img"
    t.string   "cover_img"
    t.string   "workplace"
    t.string   "school"
    t.string   "current_city"
    t.string   "hometown"
    t.string   "relationship_status"
    t.string   "profileavatar_file_name"
    t.string   "profileavatar_content_type"
    t.integer  "profileavatar_file_size"
    t.datetime "profileavatar_updated_at"
    t.string   "coverimage_file_name"
    t.string   "coverimage_content_type"
    t.integer  "coverimage_file_size"
    t.datetime "coverimage_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end
