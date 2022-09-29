class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :age
      t.float :atp_rating
      t.string :city
      t.integer :id

      t.timestamps
    end
  end
end
