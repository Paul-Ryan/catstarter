class CreatePledges < ActiveRecord::Migration[5.1]
  def change
    create_table :pledges do |t|
      t.integer :user_id, null: false
      t.integer :project_id, null: false
      t.integer :pledge_amount, null: false

      t.timestamps
    end
    add_foreign_key :pledges, :users, column: :user_id, on_delete: :cascade
    add_foreign_key :pledges, :projects, column: :project_id, on_delete: :cascade
    add_index :pledges, :user_id
    add_index :pledges, :project_id
  end
end
