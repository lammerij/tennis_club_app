class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :player_id, :tennis_club_id

  belongs_to :tennis_club
  belongs_to :player
end
