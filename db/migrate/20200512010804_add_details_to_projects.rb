class AddDetailsToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :image1, :string
    add_column :projects, :image2, :string
    add_column :projects, :image3, :string
    add_column :projects, :image4, :string
    add_column :projects, :image5, :string
    add_column :projects, :image6, :string
    add_column :projects, :image7, :string
  end
end
