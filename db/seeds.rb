# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

project_list = [

  [
    "Wigwam",
    "Design",
    "Package Design by Emily Pena",
    "https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589308642/Portfolio/Wigwam_thumb_xauszz.jpg",
    "https://github.com/devpointlabs/DigitalGloveBox"
  ],

  [
    "Batters Up",
    "Design",
    "Menu Design by Emily Pena",
    "https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589308638/Portfolio/BattersUp_thumb_sddeix.jpg",
    "https://github.com/devpointlabs/DigitalGloveBox"
  ],

  [
    "Benton Type Specimen",
    "Design",
    "Design by Emily Pena",
    "https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589308638/Portfolio/Benton_thumb_jj6cdm.jpg",
    "https://github.com/devpointlabs/DigitalGloveBox"
  ],

  [
    "4+1 Magazine",
    "Design",
    "Design by Emily Pena",
    "https://res.cloudinary.com/dvwwzmsmn/image/upload/v1589308637/Portfolio/4_1_thumb_gzygqh.jpg",
    "https://github.com/devpointlabs/DigitalGloveBox"
  ],
]

project_list.each do | name, category, description, image, link |
  Project.create( name: name, category: category, description: description, image: image, link: link )
end

puts "Seeded"