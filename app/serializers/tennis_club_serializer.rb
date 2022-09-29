class TennisClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :court_type, :reviews
end
