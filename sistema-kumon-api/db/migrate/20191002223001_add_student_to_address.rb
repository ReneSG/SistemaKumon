class AddStudentToAddress < ActiveRecord::Migration[6.0]
  def change
    add_reference :addresses, :student, null: false, foreign_key: true
    remove_reference :students, :address, null: false, foreign_key: true
  end
end
