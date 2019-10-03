class AddStudentToEmergencyContact < ActiveRecord::Migration[6.0]
  def change
    add_reference :emergency_contacts, :student, null: false, foreign_key: true
    remove_reference :students, :emergency_contact, null: false, foreign_key: true
  end
end
