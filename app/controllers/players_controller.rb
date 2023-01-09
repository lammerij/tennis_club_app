class PlayersController < ApplicationController
  skip_before_action :authorize, only: [:create, :rating]

  def index
    players = Player.all
    render json: players
  end

  def show
    render json: @current_user
  end

  def create
    new_player = Player.create(player_params)
    if new_player.valid?
      session[:player_id] = new_player.id
      render json: new_player, status: :created
    else
      render json: { errors: ["user_data_invalid"] }, status: :unprocessable_entity
    end
  end

  private

  def player_params
    # byebug
    params.permit(:name, :username, :city, :atp_rating, :password)
  end
end
