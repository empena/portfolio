class AddLinksToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :linka, :string
  end
end
