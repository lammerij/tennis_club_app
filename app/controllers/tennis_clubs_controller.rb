class TennisClubsController < ApplicationController
    def index 
        clubs = TennisClub.all
        render json: clubs, include: :reviews
    end

    def show
        club = TennisClub.find_by(id: params[:id])
        render json: club
    end

    
end
