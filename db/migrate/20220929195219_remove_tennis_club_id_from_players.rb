class RemoveTennisClubIdFromPlayers < ActiveRecord::Migration[6.1]
  def change
    remove_column :players, :tennis_club_id, :integer
  end
end
