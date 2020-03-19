class AttendancePolicy < ApplicationPolicy
  def todays?
    true
  end
end
