# frozen_string_literal: true
require 'active_support/core_ext'
class Student < ApplicationRecord
  after_create :set_next_payment_date
  enum gender: %i[male female]
  has_many :guardians, dependent: :destroy
  has_many :payments, dependent: :destroy
  has_many :attendances, dependent: :destroy
  has_one :emergency_contact, dependent: :destroy
  belongs_to :school
  has_one :address, dependent: :destroy
  has_one :hear_about_interview, dependent: :destroy
  has_one :reason_to_join_interview, dependent: :destroy
  has_one :expected_results_interview, dependent: :destroy
  has_many :student_subjects
  has_many :subjects, through: :student_subjects

  accepts_nested_attributes_for :address, :emergency_contact, :guardians, :student_subjects

  def set_next_payment_date
    self.next_payment_date = self.created_at + 1.month
    self.save
  end
end
