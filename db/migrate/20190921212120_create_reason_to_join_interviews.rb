class CreateReasonToJoinInterviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reason_to_join_interviews do |t|
      t.belongs_to :student, null: false, foreign_key: true
      t.boolean :improve_math_grades
      t.boolean :prepare_for_next_grade
      t.boolean :improve_studying_habits
      t.boolean :friend_recommendation
      t.boolean :family_recommendation
      t.boolean :school_recommendation
      t.string :another_reason

      t.timestamps
    end
  end
end
