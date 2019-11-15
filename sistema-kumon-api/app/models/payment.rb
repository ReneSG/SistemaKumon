class Payment < ApplicationRecord
  belongs_to :student
  after_create :set_month

  def set_month
    self.month =  if self.student.payments.blank?
                    Time.now.month
                  else
                    (self.student.payments.last.month % 12) + 1
                  end
    save
  end
end
