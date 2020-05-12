class RemoveLinkGitFromProjects < ActiveRecord::Migration[6.0]
  def change

    remove_column :projects, :link_git, :string
  end
end
