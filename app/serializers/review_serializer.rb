class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :player_id, :tennis_club_id, :review
end
