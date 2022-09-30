class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :atp_rating, :city
  has_many :reviews
  has_many :tennis_clubs, through: :reviews
end
