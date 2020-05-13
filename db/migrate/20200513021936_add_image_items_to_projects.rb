class AddImageItemsToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :imagea, :string
    add_column :projects, :imageb, :string
    add_column :projects, :imagec, :string
    add_column :projects, :imaged, :string
    add_column :projects, :imagee, :string
    add_column :projects, :imagef, :string
  end
end
