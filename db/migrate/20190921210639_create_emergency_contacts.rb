class CreateEmergencyContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :emergency_contacts do |t|
      t.string :name
      t.string :phone
      t.string :cellphone

      t.timestamps
    end
  end
end
