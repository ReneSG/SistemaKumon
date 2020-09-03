class AttendancesController < ApplicationController
  before_action :authenticate_user!

  def todays
    @todays_attendance = Attendance.where "DATE(created_at) = DATE(?)", Time.current
    authorize @todays_attendance
    render json: @todays_attendance.to_json(include: [:student])
  end
end
