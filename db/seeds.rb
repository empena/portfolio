# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

project_list = [
  [ "Aetna Federal Open Season", "Design", "Package Design by Emily Pena", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Grand Wailea", "Code", "Package Design by Emily Pena", "https://3.bp.blogspot.com/-Nvfm45xx00g/WvUgADDoQnI/AAAAAAAFF9g/OT0WBjlZFrYXNBxFk_fIn7hUTumkBTeSgCLcBGAs/s1600/Tra%2BDinh%2BTea%2B%25280%2529.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Party Pop", "Code", "Package Design by Emily Pena", "https://3.bp.blogspot.com/-Nvfm45xx00g/WvUgADDoQnI/AAAAAAAFF9g/OT0WBjlZFrYXNBxFk_fIn7hUTumkBTeSgCLcBGAs/s1600/Tra%2BDinh%2BTea%2B%25280%2529.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Design", "Package Design by Emily Pena", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Design", "Package Design by Emily Pena", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Code", "Package Design by Emily Pena", "https://3.bp.blogspot.com/-Nvfm45xx00g/WvUgADDoQnI/AAAAAAAFF9g/OT0WBjlZFrYXNBxFk_fIn7hUTumkBTeSgCLcBGAs/s1600/Tra%2BDinh%2BTea%2B%25280%2529.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Bigwam", "Design", "Package Design by Emily Pena", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Code", "Package Design by Emily Pena", "https://3.bp.blogspot.com/-Nvfm45xx00g/WvUgADDoQnI/AAAAAAAFF9g/OT0WBjlZFrYXNBxFk_fIn7hUTumkBTeSgCLcBGAs/s1600/Tra%2BDinh%2BTea%2B%25280%2529.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Design", "Package Design by Emily Pena", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Code", "Package Design by Emily Pena", "https://3.bp.blogspot.com/-Nvfm45xx00g/WvUgADDoQnI/AAAAAAAFF9g/OT0WBjlZFrYXNBxFk_fIn7hUTumkBTeSgCLcBGAs/s1600/Tra%2BDinh%2BTea%2B%25280%2529.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Design", "Package Design by Emily Pena", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Code", "Package Design by Emily Pena", "https://3.bp.blogspot.com/-Nvfm45xx00g/WvUgADDoQnI/AAAAAAAFF9g/OT0WBjlZFrYXNBxFk_fIn7hUTumkBTeSgCLcBGAs/s1600/Tra%2BDinh%2BTea%2B%25280%2529.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Design", "Package Design by Emily Pena", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Code", "Package Design by Emily Pena", "https://3.bp.blogspot.com/-Nvfm45xx00g/WvUgADDoQnI/AAAAAAAFF9g/OT0WBjlZFrYXNBxFk_fIn7hUTumkBTeSgCLcBGAs/s1600/Tra%2BDinh%2BTea%2B%25280%2529.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Digwam", "Design", "Package Design by Emily Pena", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Design", "Package Design by Emily Pena", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Code", "Package Design by Emily Pena", "https://3.bp.blogspot.com/-Nvfm45xx00g/WvUgADDoQnI/AAAAAAAFF9g/OT0WBjlZFrYXNBxFk_fIn7hUTumkBTeSgCLcBGAs/s1600/Tra%2BDinh%2BTea%2B%25280%2529.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Design", "Package Design by Emily Pena", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
]

project_list.each do | name, category, description, image, link |
  Project.create( name: name, category: category, description: description, image: image, link: link )
end

puts "Seeded"