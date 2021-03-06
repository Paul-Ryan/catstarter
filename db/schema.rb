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

ActiveRecord::Schema.define(version: 20180315212606) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.integer "project_id", null: false
    t.integer "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_categories_on_category_id"
    t.index ["project_id"], name: "index_categories_on_project_id"
  end

  create_table "category_names", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pledges", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "project_id", null: false
    t.integer "pledge_amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_pledges_on_project_id"
    t.index ["user_id"], name: "index_pledges_on_user_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title", null: false
    t.string "blurb", null: false
    t.text "description", null: false
    t.integer "author_id", null: false
    t.date "due_date", null: false
    t.integer "funding_goal", null: false
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_projects_on_title", unique: true
  end

  create_table "rewards", force: :cascade do |t|
    t.integer "project_id", null: false
    t.string "title", null: false
    t.text "description", null: false
    t.integer "reward_minimum_amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_rewards_on_project_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "categories", "category_names", column: "category_id", on_delete: :cascade
  add_foreign_key "categories", "projects", on_delete: :cascade
  add_foreign_key "pledges", "projects", on_delete: :cascade
  add_foreign_key "pledges", "users", on_delete: :cascade
  add_foreign_key "projects", "users", column: "author_id", on_delete: :cascade
  add_foreign_key "rewards", "projects", on_delete: :cascade
end
