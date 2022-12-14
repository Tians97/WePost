class CreateStories < ActiveRecord::Migration[7.0]
  def change
    create_table :stories do |t|
      t.string :title, null: false, index:true
      t.text :body, null: false
      t.references :author, null: false, foreign_key: { to_table: :users }
      t.references :category, null: false, foreign_key: { to_table: :categories}
      t.timestamps
    end
  end
end
