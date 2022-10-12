# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sport_time = TennisClub.create(name: "SportTime", location: "Nashville, TN", court_type: "Clay")
top_spin = TennisClub.create(name: "Top Spin", location: "New York, NY", court_type: "Hard")
drop_shot = TennisClub.create(name: "Drop Shot", location: "San Diego, CA", court_type: "Grass")

