# frozen_string_literal: true
require 'active_support/core_ext'
class Student < ApplicationRecord
  after_create :set_next_payment_date
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

  def set_next_payment_date
    self.set_next_payment_date = self.created_at + 1.month
    self.save
  end
end
