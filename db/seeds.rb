# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Friendship.destroy_all
Post.destroy_all
Comment.destroy_all

bob = User.create!(
  first_name: "Bob",
  last_name: "Belcher",
  gender: "male",
  birthday: 42.years.ago,
  password: "123456",
  email: "bob@bobsburgers.com",
  relationship_status: "Married",
  profileavatar: File.open('app/assets/images/seeds_images/bob_profileavatar.jpeg'),
  coverimage: File.open('app/assets/images/seeds_images/bobs-burgers-family.png'),
  workplace: "Bob's Burgers Restaurant",
  current_city: "Little Egg Harbor, New Jersey",
  hometown: "Atlantic City, New Jersey"
)

linda = User.create!(
  first_name: "Linda",
  last_name: "Belcher",
  gender: "female",
  birthday: 40.years.ago,
  password: "password",
  email: "linda@bobsburgers.com",
  relationship_status: "Married",
  workplace: "Bob's Burgers Restaurant",
  current_city: "Little Egg Harbor, New Jersey",
  hometown: "Hoboken, New Jersey",
  profileavatar: File.open('app/assets/images/seeds_images/linda-alright-sweater.jpg'),
  coverimage: File.open('app/assets/images/seeds_images/linda_coverimage.jpeg')
)

tina = User.create!(
  first_name: "Tina",
  last_name: "Belcher",
  gender: "female",
  birthday: 14.years.ago,
  password: "123456",
  email: "tina@middleschool.com",
  relationship_status: "Single",
  workplace: "Bob's Burgers Restaurant",
  school: "Flagstaff Middle School",
  current_city: "Little Egg Harbor, New Jersey",
  hometown: "Hoboken, New Jersey",
  profileavatar: File.open('app/assets/images/seeds_images/tina-profileavatar.jpg'),
  coverimage: File.open('app/assets/images/seeds_images/tina-cover.jpeg')
)

gene = User.create!(
  first_name: "Gene",
  last_name: "Belcher",
  gender: "male",
  birthday: 12.years.ago,
  password: "password",
  email: "gene@middleschool.com",
  workplace: "Bob's Burgers Restaurant",
  school: "Flagstaff Middle School",
  current_city: "Little Egg Harbor, New Jersey",
  hometown: "Hoboken, New Jersey",
  profileavatar: File.open('app/assets/images/seeds_images/gene-profile-avatar.jpeg'),
  coverimage: File.open('app/assets/images/seeds_images/gene-cover.jpg')
)

louise = User.create!(
  first_name: "Louise",
  last_name: "Belcher",
  gender: "female",
  birthday: 9.years.ago,
  password: "123456",
  email: "louise@elementaryschool.com"
)

teddy = User.create!(
  first_name: "Teddy",
  last_name: "Francisco",
  gender: "male",
  birthday: 40.years.ago,
  password: "password",
  email: "teddy@plumber.com",
  workplace: "Unclog Inc",
  school: "Flagstaff High School",
  current_city: "Little Egg Harbor, New Jersey",
  hometown: "Little Egg Harbor, New Jersey",
  profileavatar: File.open('app/assets/images/seeds_images/teddy-profile-avatar.jpg'),
  coverimage: File.open('app/assets/images/seeds_images/teddy-cover.jpeg')
)

pesto_senior = User.create!(
  first_name: "Jimmy",
  last_name: "Pesto",
  gender: "male",
  birthday: 38.years.ago,
  password: "password",
  email: "jimmy_senior@pizza.com",
  workplace: "Jimmy Pesto's Pizzeria",
  school: "Rutgers University",
  current_city: "Little Egg Harbor, New Jersey",
  hometown: "Queens, New York",
  profileavatar: File.open('app/assets/images/seeds_images/jimmy-sr-avatar.jpg'),
  coverimage: File.open('app/assets/images/seeds_images/jimmy-sr-cover.png')
)

pesto_junior = User.create!(
  first_name: "Jimmy",
  last_name: "Pesto",
  gender: "male",
  birthday: 14.years.ago,
  password: "123456",
  email: "jimmy_junior@pizza.com",
  school: "Flagstaff Middle School",
  current_city: "Little Egg Harbor, New Jersey",
  hometown: "Little Egg Harbor, New Jersey",
  coverimage: File.open('app/assets/images/seeds_images/jimmy-sr-cover.png'),
  profileavatar: File.open('app/assets/images/seeds_images/jimmy-jr-avatar.jpg')
)

frond = User.create!(
  first_name: "Philip",
  last_name: "Frond",
  gender: "male",
  birthday: 46.years.ago,
  password: "password",
  email: "philip@schoolcounselor.com",
  school: "Self-certified",
  current_city: "Little Egg Harbor, New Jersey",
  hometown: "Philadelphia, PA",
  workplace: "Flagstaff Middle School",
  profileavatar: File.open('app/assets/images/seeds_images/philip-profile-avatar.png'),
  coverimage: File.open('app/assets/images/seeds_images/philip-cover.jpeg')
)

gayle = User.create!(
  first_name: "Gayle",
  last_name: "Cats",
  gender: "female",
  birthday: 34.years.ago,
  password: "123456",
  email: "gayle@hypochondriac.com",
  school: "Notary school",
  workplace: "First State Bank",
  current_city: "Atlantic City, New Jersey",
  hometown: "Hoboken, NJ",
  profileavatar: File.open('app/assets/images/seeds_images/gayle-profile.jpeg'),
  coverimage: File.open('app/assets/images/seeds_images/gayle-cover.jpg')
)

bobPost1 = bob.posts.create(created_at: rand(360).days.ago, receiver: linda, body: 'The kids are causing a mess in the restaurant')
bobPost2 = bob.posts.create(created_at: rand(360).days.ago, body: 'Get the best burgers in town 1 block away from the boardwalk')
lindaPost1 = linda.posts.create(created_at: rand(360).days.ago, receiver: bob, body: 'Look at ma and pa', image: File.open('app/assets/images/seeds_images/linda-parents.jpg'))
lindaPost2 = linda.posts.create(created_at: rand(360).days.ago, body: "Hear me sing at Bob's burgers")
tinaPost1 = tina.posts.create(created_at: rand(360).days.ago, receiver: pesto_junior, body: 'We look so nice together', image: File.open('app/assets/images/seeds_images/jimmy-tina.jpg'))
tinaPost2 = tina.posts.create(created_at: rand(360).days.ago, body: "Pizza and burgers are on the same level")
genePost1 = gene.posts.create(created_at: rand(360).days.ago, receiver: louise, body: "We need to stop waiting in dad's restaurant")
genePost2 = gene.posts.create(created_at: rand(360).days.ago, body: "Too much homework... anybody for chinese?")
louisePost1 = louise.posts.create(created_at: rand(360).days.ago, body: "You could sell your soul, I did, look at me")
louisePost2 = louise.posts.create(created_at: rand(360).days.ago, body: "How I feel when i don't need to work", image: File.open('app/assets/images/seeds_images/louise-evil-laugh.jpeg'))
teddyPost1 = teddy.posts.create(created_at: rand(360).days.ago, receiver: bob, body: "Why don't you open sooner?")
teddyPost2 = teddy.posts.create(created_at: rand(360).days.ago, body: "BFFs", image: File.open('app/assets/images/seeds_images/teddy-sponge.jpg'))
pesto_seniorPost1 = pesto_senior.posts.create(created_at: rand(360).days.ago, body: "Pizza is better than burgers")
pesto_seniorPost2 = pesto_senior.posts.create(created_at: rand(360).days.ago, body: "Best Pizza in town", image: File.open('app/assets/images/seeds_images/pizzeria.jpg'))
pesto_juniorPost1 = pesto_junior.posts.create(created_at: rand(360).days.ago, body: "Dancing is awesome")
pesto_juniorPost2 = pesto_junior.posts.create(created_at: rand(360).days.ago, body: "Want to see some magic come to Pesto's Pizzeria", image: File.open('app/assets/images/seeds_images/pizzeria.jpg'))
frondPost1 = frond.posts.create(created_at: rand(360).days.ago, receiver: tina, body: 'Come to my "Feelings are important" event')
frondPost2 = frond.posts.create(created_at: rand(360).days.ago, body: 'Parent teacher conferences are so much fun')
gaylePost1 = gayle.posts.create(created_at: rand(360).days.ago, receiver: linda, body: "I'm going to knit you a sweater")
gaylePost2 = gayle.posts.create(created_at: rand(360).days.ago, body: "Missing you", image: File.open('app/assets/images/seeds_images/gayle_post.png'))

Friendship.create(sender_id: bob.id, replier_id: linda.id, status: "friended")
Friendship.create(sender_id: bob.id, replier_id: gene.id, status: "friended")
Friendship.create(sender_id: bob.id, replier_id: louise.id, status: "unanswered")
Friendship.create(sender_id: bob.id, replier_id: teddy.id, status: "friended")
Friendship.create(sender_id: linda.id, replier_id: gayle.id, status: "friended")
Friendship.create(sender_id: linda.id, replier_id: gene.id, status: "friended")
Friendship.create(sender_id: linda.id, replier_id: louise.id, status: "unanswered")
Friendship.create(sender_id: tina.id, replier_id: bob.id, status: "friended")
Friendship.create(sender_id: tina.id, replier_id: linda.id, status: "friended")
Friendship.create(sender_id: tina.id, replier_id: gene.id, status: "friended")
Friendship.create(sender_id: tina.id, replier_id: louise.id, status: "friended")
Friendship.create(sender_id: tina.id, replier_id: pesto_junior.id, status: "friended")
Friendship.create(sender_id: gene.id, replier_id: louise.id, status: "unanswered")
Friendship.create(sender_id: frond.id, replier_id: tina.id, status: "friended")
Friendship.create(sender_id: frond.id, replier_id: bob.id, status: "friended")
Friendship.create(sender_id: frond.id, replier_id: linda.id, status: "unanswered")
Friendship.create(sender_id: frond.id, replier_id: pesto_senior.id, status: "friended")
Friendship.create(sender_id: bob.id, replier_id: pesto_senior.id, status: "unanswered")
Friendship.create(sender_id: pesto_junior.id, replier_id: bob.id, status: "unanswered")
Friendship.create(sender_id: pesto_junior.id, replier_id: pesto_senior.id, status: "friended")
Friendship.create(sender_id: gayle.id, replier_id: bob.id, status: "unanswered")
Friendship.create(sender_id: gayle.id, replier_id: tina.id, status: "friended")
