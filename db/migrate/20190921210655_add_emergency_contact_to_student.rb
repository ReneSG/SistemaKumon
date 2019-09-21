class AddEmergencyContactToStudent < ActiveRecord::Migration[6.0]
  def change
    add_reference :students, :emergency_contact, null: false, foreign_key: true
  end
end
