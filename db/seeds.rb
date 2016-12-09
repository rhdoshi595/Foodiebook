# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

scott = User.create(
  first_name: "Bob",
  last_name: "Belcher",
  gender: "male",
  birthday: 42.years.ago,
  password: "123456",
  email: "bob@bobsburgers.com"
)

linda = User.create(
  first_name: "Linda",
  last_name: "Belcher",
  gender: "female",
  birthday: 40.years.ago,
  password: "password",
  email: "linda@bobsburgers.com"
)

tina = User.create(
  first_name: "Tina",
  last_name: "Belcher",
  gender: "female",
  birthday: 14.years.ago,
  password: "123456",
  email: "tina@middleschool.com"
)

gene = User.create(
  first_name: "Gene",
  last_name: "Belcher",
  gender: "male",
  birthday: 12.years.ago,
  password: "password",
  email: "gene@middleschool.com"
)

louise = User.create(
  first_name: "Louise",
  last_name: "Belcher",
  gender: "female",
  birthday: 9.years.ago,
  password: "123456",
  email: "louise@elementaryschool.com"
)
