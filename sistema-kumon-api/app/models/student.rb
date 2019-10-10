# frozen_string_literal: true
require 'active_support/core_ext'
class Student < ApplicationRecord
  enum gender: %i[male female]
  has_many :guardians
  has_many :payments
  has_many :attendances
  has_one :emergency_contact
  belongs_to :school
  has_one :address
  has_one :hear_about_interview
  has_one :reason_to_join_interview
  has_one :expected_results_interview

  accepts_nested_attributes_for :address, :emergency_contact, :guardians

  def next_payment_date
    date = if !self.payments.empty?
              self.payments.last.created_at + 1.month
            else
              self.created_at + 1.month
            end
    if date.wday.zero? || date.wday == 6
      date.next_week.to_date
    else
      date.to_date
    end
  end
end
