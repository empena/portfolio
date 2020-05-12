class RemoveDetailsfromProjects < ActiveRecord::Migration[6.0]
  def change
    remove_column :projects, :image1, :string
    remove_column :projects, :image2, :string
    remove_column :projects, :image3, :string
    remove_column :projects, :image4, :string
    remove_column :projects, :image5, :string
    remove_column :projects, :image6, :string
    remove_column :projects, :image7, :string
  end
end
