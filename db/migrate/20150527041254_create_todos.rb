class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :description
      t.timestamps
    end
    add_reference :todos, :user, index: true
  end
end
