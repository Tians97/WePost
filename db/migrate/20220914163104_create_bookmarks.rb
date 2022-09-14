class CreateBookmarks < ActiveRecord::Migration[7.0]
  def change
    create_table :bookmarks do |t|
      t.references :user, null:false, foreign_key: {to_table: :users}
      t.references :story, null:false, foreign_key: {to_table: :stories}
      t.timestamps
    end
    add_index :bookmarks, [:user_id, :story_id], unique: true
  end
end
