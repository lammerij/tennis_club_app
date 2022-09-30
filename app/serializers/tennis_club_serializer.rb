class TennisClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :court_type

  has_many :reviews
  has_many :players, through: :reviews
end
