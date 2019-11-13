class AddNextPaymentToStudent < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :next_payment_date, :date
  end
end
