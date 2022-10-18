class TennisClub < ApplicationRecord
    has_many :reviews
    has_many :players, through: :reviews

    validates :name, :location, :court_type, presence: true 
    
end
