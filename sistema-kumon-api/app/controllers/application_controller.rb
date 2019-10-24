class ApplicationController < ActionController::API
  respond_to :json
  include Pundit
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  def render_resource(resource)
    if resource.errors.empty?
      render json: resource
    else
      validation_error(resource)
    end
  end

  def validation_error(resource)
    render json: {
      errors: [
        {
          status: '400',
          title: 'Bad Request',
          detail: resource.errors,
          code: '100'
        }
      ]
    }, status: :bad_request
  end

  def user_not_authorized
    render json: {
      errors: [
        {
          status: '401',
          title: 'Unauthorized',
          detail: "No tienes permiso para realizar esta acción",
          code: '100'
        }
      ]
    }, status: :unauthorized
  end
end

