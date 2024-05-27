class CreateEntries < ActiveRecord::Migration[7.1]
  def change
    create_table :entries do |t|
      t.string :title
      t.string :content
      t.string :category

      t.timestamps
    end
  end
end
