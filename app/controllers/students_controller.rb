class StudentsController < ApplicationController
  before_action :set_student, only: [:show, :update, :destroy, :next_payment_date]

  # GET /students
  def index
    @students = Student.all

    render json: @students
  end

  # GET /students/1
  def show
    render json: @student.to_json(include: [:address, :guardians, :emergency_contact])
  end

  # POST /students
  def create
    @student = Student.new(student_params)

    if @student.save
      render json: @student, status: :created, location: @student
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  def next_payment_date
    render json: @student
  end

  # PATCH/PUT /students/1
  def update
    if @student.update(student_params)
      render json: @student
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  # DELETE /students/1
  def destroy
    @student.destroy
  end

  def mark_attendance
    @student = Student.find_by(identifier: params[:identifier])

    if @student
      @student.attendances.create()
      render json: @student
    else
      render status: 404, json: {"errors": "Estudiante no encontrado"}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_student
      @student = Student.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def student_params
      params.require(:student).permit(:name, :last_name_father, :last_name_mother, :identifier, :date_of_birth, :gender, :phone, :medical_instructions, :school_id, :address_id, :emergency_contact_id,
                                     address_attributes: [:id, :street_name, :ext_num, :int_num, :neighborhood, :city, :state, :zipcode, :between_street_a, :between_street_b],
                                     emergency_contact_attributes: [:id, :name, :phone, :cellphone],
                                     guardians_attributes: [:id, :name, :last_name_father, :last_name_mother, :email, :phone, :job])
    end
end
