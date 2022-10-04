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
    # byebug
    review = Review.new(review_params)
    if review.save
      render json: review, status: :created
    else
      render json: { errors: "Invalid Data!" }, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.permit(:review, :player_id, :tennis_club_id)
  end
end
