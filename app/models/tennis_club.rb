class TennisClub < ApplicationRecord
    has_many :reviews
    has_many :players, through: :reviews
end
