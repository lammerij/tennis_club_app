class TennisClubsController < ApplicationController
  skip_before_action :authorize, only: :create

  def index
    clubs = TennisClub.all
    render json: clubs
  end

  def show
    club = TennisClub.find_by(id: params[:id])
    render json: club
  end

  def create
    player = Player.find_by(id: session[:player_id])
    club = player.tennis_clubs.create(club_params)
    if club.valid?
      render json: club, status: :created
    else
      render json: { errors: ["Please enter valid data"] }, status: :unprocessable_entity
    end
  end

  private

  def club_params
    params.permit(:name, :location, :court_type)
  end
end
