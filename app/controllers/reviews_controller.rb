class ReviewsController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def index
    reviews = Review.all
    render json: reviews
  end

  def show
    review = find_review
    render json: review
  end

  def create
    player = Player.find_by(id: session[:player_id])
    review = player.reviews.create(review_params)
    if review.valid?
      render json: review, status: :created
    else
      render json: { errors: ["Review must be more than 10 characters."] }, status: :unprocessable_entity
    end
  end

  def update
    current_user = Player.find_by(id: session[:player_id])
    review = find_review
    if review.player.id = current_user.id
      review.update(review_params)
      render json: review
    else
      render json: { error: "Review not found" }, status: :not_found
    end
  end

  def destroy
    review = find_review
    if review.player.id = current_user.id
      review.destroy
    else
      render json: { error: "Not your review!" }, status: :unprocessable_entity
    end
  end

  private

  def find_review
    Review.find_by(id: params[:id])
  end

  def review_params
    params.permit(:review, :player_id, :tennis_club_id)
  end
end
