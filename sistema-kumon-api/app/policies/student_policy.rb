class StudentPolicy < ApplicationPolicy
  def mark_attendance?
    true
  end
end
