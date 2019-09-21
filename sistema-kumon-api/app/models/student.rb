# frozen_string_literal: true

class Student < ApplicationRecord
  enum gender: %i[male female]
  has_many :guardians
  has_many :payments
  has_many :attendances
  has_one :emergency_contact
  has_one :school
  has_one :address
  has_one :hear_about_interview
  has_one :reason_to_join_interview
  has_one :expected_results_interview
end
