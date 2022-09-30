class SessionsController < ApplicationController
  def create
    player = Player.find_by(username: params[:username])
    if player && player.authenticate(params[:password])
      session[:player_id] = player.id
      render json: player, status: :created
    else
      render json: { errors: ["Username or password not found; please try again!"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete :player_id
    head :no_content
  end
end
