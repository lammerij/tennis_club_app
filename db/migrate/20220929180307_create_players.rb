class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.float :atp_rating
      t.string :city
      t.integer :tennis_club_id

      t.timestamps
    end
  end
end
