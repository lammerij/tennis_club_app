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

jonathan = Player.create(name: "Jonathan Lammering", atp_rating: 3.5, city: "New York, NY")
roger = Player.create(name: "Roger Federer", atp_rating: 4.0, city: "San Diego, CA")

Review.create(tennis_club_id: sport_time.id, player_id: jonathan.id, review: " I loved the courts here, clean, friendly staff, and great rates.")
Review.create(tennis_club_id: top_spin.id, player_id: roger.id, review: " Long wait times, rude staff. I won't be coming back.")
