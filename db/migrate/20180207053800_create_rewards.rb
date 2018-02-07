class CreateRewards < ActiveRecord::Migration[5.1]
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.integer :reward_minimum_amount, null: false
      t.timestamps
    end
    add_index :rewards, :project_id
    add_foreign_key :rewards, :projects, column: :project_id, on_delete: :cascade
  end
end
