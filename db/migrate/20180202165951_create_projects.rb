class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :blurb, null: false
      t.text :description, null: false
      t.integer :author_id, null: false
      t.date :due_date, null: false
      t.integer :funding_goal, null: false
      t.string :image_url

      t.timestamps
    end

    add_foreign_key :projects, :users, column: :author_id
    add_index :projects, :title, unique: true

  end
end
