class ChangeNameToBeStringInProjects < ActiveRecord::Migration[6.0]
  def change
    change_column :projects, :description, :string
  end
end