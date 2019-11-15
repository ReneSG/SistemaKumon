class Payment < ApplicationRecord
  belongs_to :student
  before_create :set_month

  def set_month
    self.month = if !self.student.payments.blank?
                    (self.student.payments.last.month % 12) + 1
                 else
                    Time.now.month
                 end
  end
end
