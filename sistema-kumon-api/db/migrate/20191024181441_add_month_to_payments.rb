class AddMonthToPayments < ActiveRecord::Migration[6.0]
  def change
    add_column :payments, :month, :integer
  end
end
