class Player < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :tennis_clubs, through: :reviews

    validates :username, presence: true, uniqueness: true
end
