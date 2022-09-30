class PlayersController < ApplicationController
    def index 
        players = Player.all
        render json: players
    end

    def show
        player = Players.find_by(id: params[:id])
        render json: player
    end

    def create
        new_player = Player.create(player_params)
        if new_user.valid?
        session[:player_id] = new_player.id
        render json: new_player, status: :created
    end


    private

    def player_params
        params.permit(:username, :city, :atp_rating, :password, :password_confirmation)
    end
end
