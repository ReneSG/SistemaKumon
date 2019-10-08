class AddIndexToIdentifier < ActiveRecord::Migration[6.0]
  def change
    add_index :students, :identifier, :unique => true
  end
end
