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
    # byebug
    club = TennisClub.create(club_params)
    if club.valid?
      render json: club, status: :created
    else
      render json: { errors: ["Please fill out all fields"] }, status: :unprocessable_entity
    end
  end


  private

  def club_params
    params.permit(:name, :location, :court_type)
  end
end
