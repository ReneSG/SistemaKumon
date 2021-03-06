class StudentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_student, only: [:show, :update, :destroy, :all_payments]

  # GET /students
  def index
    authorize Student
    @students = Student.where(active: true)
    render json: @students.to_json(methods: [:next_payment_date])
  end

  # GET /students/1
  def show
    authorize @student
    render json: @student.to_json(include: [:address, :guardians, :emergency_contact, :school, :subjects, :student_subjects])
  end

  # POST /students
  def create
    authorize Student
    @student = Student.new(student_params)
    @student.active = true
    @school = maybe_update_or_create_school
    @student.school_id = @school.id
    if @student.save
      render json: @student, status: :created, location: @student
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /students/1
  def update
    authorize @student
    @school = maybe_update_or_create_school
    @student.school_id = @school.id
    if @student.update(student_params)
      render json: @student
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  # DELETE /students/1
  def destroy
    authorize @student
    @student.destroy
  end

  def set_to_inactive
    authorize @student
    @student.active = false
    if @student.save
      render status: 204
    else
      render status: 404, json: {"errors": "Error dando de baja al estudiante."}
    end
  end

  def next_payment_date
    @student = Student.find_by(identifier: params[:student_id])
    payment_date = @student.next_payment_date
    render json: { 'next_payment_date' => payment_date, 'payments' => @student.payments }
  end

  def mark_attendance
    @student = Student.find_by(identifier: params[:identifier])
    authorize Student
    if @student
      @student.attendances.create()
      render json: @student.attributes.merge("next_payment_date" => @student.next_payment_date)
    else
      render status: 404, json: {"errors": "Estudiante no encontrado"}
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_student
    @student = Student.find(params[:id])
  end

  def maybe_update_or_create_school
    return params[:school_attributes].key?(:id) ? School.find(params[:school_attributes][:id]) : School.create(name: params[:school_attributes][:name])
  end

  # Only allow a trusted parameter "white list" through.
  def student_params
    params.require(:student).permit(:name, :active, :last_name_father, :last_name_mother, :identifier, :date_of_birth, :gender, :phone, :medical_instructions, :school_id, :address_id, :emergency_contact_id,
                                    address_attributes: [:id, :street_name, :ext_num, :int_num, :neighborhood, :city, :state, :zipcode, :between_street_a, :between_street_b],
                                    emergency_contact_attributes: [:id, :name, :phone, :cellphone],
                                    guardians_attributes: [:id, :name, :last_name_father, :last_name_mother, :email, :phone, :job],
                                    student_subjects_attributes: [:id, :student_id, :subject_id, :_destroy])
  end
end
