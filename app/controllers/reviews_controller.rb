class ReviewsController < ApplicationController
  def index
    reviews = Review.all
    render json: reviews
  end

  def show
    review = Review.find_by(id: params[:id])
    render json: review
  end

  def create
    review = Review.create(review_params)
    if review
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
