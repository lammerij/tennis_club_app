class Review < ApplicationRecord
    belongs_to :player
    belongs_to :tennis_club

    validates :review, presence: true
    validates :review, length: { minimum: 10 }
end
