class CreateGuardians < ActiveRecord::Migration[6.0]
  def change
    create_table :guardians do |t|
      t.string :name
      t.string :last_name_father
      t.string :last_name_mother
      t.string :email
      t.string :phone
      t.string :job
      t.belongs_to :student, null: false, foreign_key: true

      t.timestamps
    end
  end
end
