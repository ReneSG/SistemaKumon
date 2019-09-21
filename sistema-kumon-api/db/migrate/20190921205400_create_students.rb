class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :name,               null: false
      t.string :last_name_father,   null: false
      t.string :last_name_mother,   null: false
      t.string :identifier,         null: false
      t.date :date_of_birth,        null: false
      t.integer :gender,            null: false
      t.string :phone
      t.text :medical_instructions

      t.timestamps
    end
  end
end
