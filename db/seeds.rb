# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

project_list = [
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
  [ "Wigwam", "Package Design by Emily Pena", "Design", "https://cdn.dribbble.com/users/2282250/screenshots/7081885/coffee-bag-packaging-design-.jpg", "https://github.com/devpointlabs/DigitalGloveBox" ],
]

project_list.each do | name, category, description, image, link |
  Project.create( name: name, category: category, description: description, image: image, link: link )
end

puts "Seeded"