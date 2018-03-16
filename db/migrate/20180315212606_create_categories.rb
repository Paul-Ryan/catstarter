class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.integer :project_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
    add_index :categories, :project_id
    add_index :categories, :category_id
    add_foreign_key :categories, :projects, column: :project_id, on_delete: :cascade 
    add_foreign_key :categories, :category_names, column: :category_id, on_delete: :cascade 
  end
end
