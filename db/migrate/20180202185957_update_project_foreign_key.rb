class UpdateProjectForeignKey < ActiveRecord::Migration[5.1]
  def change
    remove_foreign_key :projects, :users
    add_foreign_key :projects, :users, column: :author_id, on_delete: :cascade
  end
end
