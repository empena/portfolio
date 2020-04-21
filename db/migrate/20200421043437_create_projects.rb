class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :category
      t.text :description
      t.string :image
      t.string :link

      t.timestamps
    end
  end
end
