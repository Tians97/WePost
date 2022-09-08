class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :title, null:false
      t.timestamps
    end
    add_index :categories, :title, unique:true
  end
end
