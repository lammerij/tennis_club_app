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
    player = Player.find_by(id: session[:player_id])
    new_review = player.review.create(review_params)
    if new_review.valid?
      render json: new_review, status: :created
    else
      render json: { errors: "Please enter valid data" }, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.permit(:text)
  end
end
