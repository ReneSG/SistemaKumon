class CreateAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :addresses do |t|
      t.string :street_name
      t.string :ext_num
      t.string :int_num
      t.string :neighborhood
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :between_street_a
      t.string :between_street_b

      t.timestamps
    end
  end
end
