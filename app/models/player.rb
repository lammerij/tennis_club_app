class Player < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :tennis_clubs, through: :reviews

    validates :username, :name, :password, :city, :atp_rating, presence: true, uniqueness: true
end
