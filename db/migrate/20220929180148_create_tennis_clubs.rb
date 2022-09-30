class CreateTennisClubs < ActiveRecord::Migration[6.1]
  def change
    create_table :tennis_clubs do |t|
      t.string :name
      t.string :location
      t.string :court_type

      t.timestamps
    end
  end
end
