class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize

  def authorize
    @current_user = Player.find_by(id: session[:player_id])
    render json: { errors: "Not authorized" }, status: :unauthorized unless @current_user
  end

end
