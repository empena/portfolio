class AddColumnToTable < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :link_view, :string
    add_column :projects, :link_git, :string
  end
end
