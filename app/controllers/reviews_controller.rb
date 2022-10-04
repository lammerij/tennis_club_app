class ReviewsController < ApplicationController
  skip_before_action :authorize, only: :create
  def index
    reviews = Review.all
    render json: reviews
  end

  def show
    review = Review.find_by(id: params[:id])
    render json: review
  end

  def create
    # byebug
    player = Player.find_by(id: session[:player_id])
    review = player.reviews.create(review_params)
    if review.valid?
      render json: review, status: :created
    else
      render json: { errors: ["Please enter valid data"] }, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.permit(:review, :player_id, :tennis_club_id)
  end
end
