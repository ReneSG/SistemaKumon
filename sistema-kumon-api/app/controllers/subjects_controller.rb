class SubjectsController < ApplicationController
  before_action :authenticate_user!

  def index
    @subjects = Subject.all
    render json: @subjects.to_json
  end
end
