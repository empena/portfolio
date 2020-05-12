class CreateImages < ActiveRecord::Migration[6.0]
  def change
    create_table :images do |t|
      t.string :option1
      t.string :option2
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
