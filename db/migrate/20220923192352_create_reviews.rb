class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :player_id
      t.integer :tennis_club_id
      t.text :review

      t.timestamps
    end
  end
end
