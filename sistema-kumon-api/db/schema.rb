# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_21_212232) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string "street_name"
    t.string "ext_num"
    t.string "int_num"
    t.string "neighborhood"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.string "between_street_a"
    t.string "between_street_b"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "attendances", force: :cascade do |t|
    t.bigint "student_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["student_id"], name: "index_attendances_on_student_id"
  end

  create_table "emergency_contacts", force: :cascade do |t|
    t.string "name"
    t.string "phone"
    t.string "cellphone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "expected_results_interviews", force: :cascade do |t|
    t.bigint "student_id", null: false
    t.boolean "improve_grades"
    t.boolean "create_solid_foundations"
    t.boolean "increase_concentration"
    t.boolean "obtain_mental_agility"
    t.boolean "create_studying_habits"
    t.boolean "increase_confidence"
    t.string "another_reason"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["student_id"], name: "index_expected_results_interviews_on_student_id"
  end

  create_table "guardians", force: :cascade do |t|
    t.string "name"
    t.string "last_name_father"
    t.string "last_name_mother"
    t.string "email"
    t.string "phone"
    t.string "job"
    t.bigint "student_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["student_id"], name: "index_guardians_on_student_id"
  end

  create_table "hear_about_interviews", force: :cascade do |t|
    t.bigint "student_id", null: false
    t.boolean "internet"
    t.string "maganzine"
    t.string "ad"
    t.string "article"
    t.boolean "kumon_ad"
    t.boolean "family_recommendation"
    t.boolean "friend_recommendation"
    t.boolean "school_recommendation"
    t.string "another_recommendation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["student_id"], name: "index_hear_about_interviews_on_student_id"
  end

  create_table "payments", force: :cascade do |t|
    t.bigint "student_id", null: false
    t.float "amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["student_id"], name: "index_payments_on_student_id"
  end

  create_table "reason_to_join_interviews", force: :cascade do |t|
    t.bigint "student_id", null: false
    t.boolean "improve_math_grades"
    t.boolean "prepare_for_next_grade"
    t.boolean "improve_studying_habits"
    t.boolean "friend_recommendation"
    t.boolean "family_recommendation"
    t.boolean "school_recommendation"
    t.string "another_reason"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["student_id"], name: "index_reason_to_join_interviews_on_student_id"
  end

  create_table "schools", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "students", force: :cascade do |t|
    t.string "name", null: false
    t.string "last_name_father", null: false
    t.string "last_name_mother", null: false
    t.string "identifier", null: false
    t.date "date_of_birth", null: false
    t.integer "gender", null: false
    t.string "phone"
    t.text "medical_instructions"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "school_id", null: false
    t.bigint "address_id", null: false
    t.bigint "emergency_contact_id", null: false
    t.index ["address_id"], name: "index_students_on_address_id"
    t.index ["emergency_contact_id"], name: "index_students_on_emergency_contact_id"
    t.index ["school_id"], name: "index_students_on_school_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "attendances", "students"
  add_foreign_key "expected_results_interviews", "students"
  add_foreign_key "guardians", "students"
  add_foreign_key "hear_about_interviews", "students"
  add_foreign_key "payments", "students"
  add_foreign_key "reason_to_join_interviews", "students"
  add_foreign_key "students", "addresses"
  add_foreign_key "students", "emergency_contacts"
  add_foreign_key "students", "schools"
end
