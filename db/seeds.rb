# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Project.create (
  name: 'Wigwam',
  description: 'Package Design by Emily Pena',
  category: 'Design'
),

Project.create (
  name: 'Down the Aisle',
  description: 'Package Design by Emily Pena',
  category: 'Design'
),

Project.create (
  name: 'Digital Glovebox',
  description: 'Developed by Emily Pena, Seth Wheeler, Tom Gaston, Qi Cao',
  category: 'Code'
  link: "https://github.com/devpointlabs/DigitalGloveBox"
)

puts "Seeded"
