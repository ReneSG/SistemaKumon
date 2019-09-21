class CreateExpectedResultsInterviews < ActiveRecord::Migration[6.0]
  def change
    create_table :expected_results_interviews do |t|
      t.belongs_to :student, null: false, foreign_key: true
      t.boolean :improve_grades
      t.boolean :create_solid_foundations
      t.boolean :increase_concentration
      t.boolean :obtain_mental_agility
      t.boolean :create_studying_habits
      t.boolean :increase_confidence
      t.string :another_reason

      t.timestamps
    end
  end
end
