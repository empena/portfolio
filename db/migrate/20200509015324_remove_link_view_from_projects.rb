class RemoveLinkViewFromProjects < ActiveRecord::Migration[6.0]
  def change

    remove_column :projects, :link_view, :string
  end
end
