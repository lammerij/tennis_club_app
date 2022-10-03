class PlayersController < ApplicationController
    skip_before_action :authorize, only: :create
  def index
    players = Player.all
    render json: players
  end

  def show
    player = Player.find_by(id: session[:player_id])
    render json: player
  end

  def create
    new_player = Player.create(player_params)
    if new_player.valid?
      session[:player_id] = new_player.id
      render json: new_player, status: :created
    else
      render json: { errors: "user_data_invalid" }, status: :unprocessable_entity
    end
  end

  private

  def user_data_invalid(error_hash)
    render json: { errors: error_hash.record.errors.full_messages }, status: :unprocessable_entity
  end

  def user_data_not_found
    render json: { error: "Not authorized." }, status: :unauthorized unless session.include? :player_id
  end

  def player_params
    params.permit(:name, :username, :city, :atp_rating, :password, :password_confirmation)
  end
end
