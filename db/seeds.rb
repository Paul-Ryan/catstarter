# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Project.delete_all

user1 = User.create(username: 'demoLogin', email: 'demo@email.com', password: 'password')
user2 = User.create(username: 'Paul', email: 'paul.ryan.iii@gmail.com', password: 'dinosaur1')
user3 = User.create(username: 'Dana', email: 'dana@email.com', password: 'dinosaur2')
user4 = User.create(username: 'Brenna', email: 'brenna@email.com', password: 'dinosaur5')
user5 = User.create(username: 'Bart', email: 'bart@cat.com', password: 'dinosaur3')
user6 = User.create(username: 'Bonny', email: 'bonny@cat.com', password: 'dinosaur4')

project1 = Project.create(
  title: "My great-great-grandfather's cast iron pan",
  blurb: "These pans are made using secret family iron smithing techniques passed down through generations",
  description: "Lorem ipsum dolor amet shoreditch viral vaporware beard williamsburg. Tumblr artisan sartorial, kale chips knausgaard irony selvage cloud bread tumeric ennui 3 wolf moon lumbersexual aesthetic godard. Organic pour-over bushwick everyday carry sustainable aesthetic. Food truck bitters master cleanse typewriter offal photo booth man bun selfies. Chicharrones pok pok biodiesel gluten-free cred succulents portland.

Semiotics 3 wolf moon adaptogen you probably haven't heard of them, readymade yuccie cliche ethical PBR&B authentic. Vinyl brunch keffiyeh kickstarter snackwave, scenester deep v woke four loko neutra gochujang disrupt craft beer beard coloring book. Adaptogen lyft mlkshk food truck. Chartreuse locavore succulents banjo irony XOXO vegan small batch retro health goth. Hashtag venmo glossier, bespoke leggings sriracha pok pok tilde artisan cold-pressed kombucha 90's cloud bread. Kale chips vice locavore church-key, flannel before they sold out single-origin coffee 8-bit. Before they sold out four loko subway tile marfa offal forage pabst.",
  author_id: user1.id,
  due_date: Date.today + 30,
  funding_goal: 2000,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897262/food.jpg"
)

project2 = Project.create(
  title: "Bespoke x-ray glasses",
  blurb: "Keep away from mirrors",
  description: "Edison bulb pitchfork typewriter normcore. Poke readymade af swag pour-over la croix tilde kickstarter jianbing pok pok 3 wolf moon 90's affogato letterpress. Mustache copper mug poke kale chips food truck, ennui jianbing keffiyeh. Before they sold out selfies pour-over hammock post-ironic, mlkshk hot chicken shoreditch af tumblr glossier meggings. Authentic four dollar toast plaid, taiyaki pour-over everyday carry poutine snackwave jean shorts godard thundercats PBR&B pop-up sartorial tilde. Celiac squid kogi, butcher food truck messenger bag kale chips tumblr.

Direct trade meggings godard heirloom. Tousled distillery narwhal, lo-fi pok pok microdosing tattooed post-ironic tbh. 90's forage thundercats fixie +1 readymade hoodie post-ironic swag vexillologist seitan bitters hot chicken gastropub. Swag shabby chic cliche kitsch fashion axe paleo succulents fingerstache tofu locavore vinyl unicorn polaroid artisan fanny pack. Listicle umami air plant vape edison bulb helvetica sartorial sriracha raclette. Truffaut vinyl knausgaard post-ironic authentic unicorn glossier raw denim you probably haven't heard of them leggings thundercats everyday carry yr. Whatever food truck helvetica keffiyeh salvia jean shorts selfies activated charcoal.",
  author_id: user2.id,
  due_date: Date.today + 30,
  funding_goal: 4000,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897262/cool-glasses.jpg"
)

project3 = Project.create(
  title: "Notebooks made of recycled worse notebooks",
  blurb: "College-ruled notebooks for writing your thoughts, feelings, hopes, dreams or whatever",
  description: "Street art austin selfies neutra portland asymmetrical fashion axe kinfolk fingerstache. Flannel deep v trust fund enamel pin brunch meh woke try-hard biodiesel letterpress. Williamsburg skateboard gastropub butcher chicharrones activated charcoal. Umami post-ironic af, poutine microdosing small batch master cleanse.

Shaman scenester synth gochujang. Edison bulb stumptown tumeric distillery drinking vinegar health goth meggings iPhone humblebrag master cleanse artisan. Slow-carb tattooed tousled direct trade fam selvage food truck. Seitan vaporware pour-over, succulents trust fund scenester VHS keffiyeh. Hoodie neutra fingerstache, marfa coloring book literally post-ironic tofu vaporware semiotics portland thundercats bitters health goth. Disrupt yr woke, before they sold out mumblecore prism fanny pack ramps.",
  author_id: user3.id,
  due_date: Date.today + 30,
  funding_goal: 300,
  image_url: "http://res.cloudinary.com/paul-ryan/image/upload/v1517897259/thought-catalog.jpg"
)

project4 = Project.create(
  title: "Bowl with a duck on it",
  blurb: "First of a series of bowls to hold fruit!",
  description: "Lorem ipsum dolor amet before they sold out umami YOLO, next level normcore wolf meggings subway tile hashtag fixie ramps listicle +1 single-origin coffee sriracha. Craft beer jianbing humblebrag, venmo heirloom food truck master cleanse. Green juice ennui microdosing, taxidermy poutine tattooed venmo selfies yr succulents celiac snackwave bicycle rights. VHS bespoke blog paleo vaporware cronut. Cornhole freegan trust fund thundercats. Tilde plaid four loko fashion axe viral stumptown. Taiyaki heirloom bitters selfies crucifix, cliche helvetica truffaut.

Authentic organic iceland mlkshk, microdosing tilde butcher keffiyeh marfa fanny pack. Church-key beard ramps af tote bag twee. 3 wolf moon yuccie bushwick man braid, cornhole selfies yr intelligentsia craft beer dreamcatcher la croix. Ugh normcore literally XOXO selvage cold-pressed +1 venmo fam chia hoodie raw denim pork belly dreamcatcher mumblecore. Enamel pin messenger bag chambray kogi 8-bit yr echo park twee. PBR&B pug gastropub umami, paleo brunch hexagon tacos. Quinoa pop-up brooklyn bushwick hella farm-to-table williamsburg, hell of lo-fi.

Quinoa crucifix activated charcoal before they sold out. Viral hot chicken direct trade pop-up enamel pin ugh. Craft beer typewriter tattooed iPhone taxidermy blog sriracha vexillologist man braid leggings chia chambray wolf banjo. Single-origin coffee paleo bushwick schlitz deep v pabst readymade hoodie cold-pressed direct trade bitters kickstarter raw denim woke.",
  author_id: user1.id,
  due_date: Date.today + 30,
  funding_goal: 1000000,
  image_url: "http://res.cloudinary.com/paul-ryan/image/upload/v1517897261/yellow-bowl.jpg"
)

project5 = Project.create(
  title: "Boat Zone: a strategy game where you play the boat",
  blurb: "Upgrade your and parrots and shiver your timbers in this real-time fantasy epic",
  description: "Blue bottle paleo sartorial polaroid plaid austin. Mlkshk ramps cold-pressed live-edge, stumptown gentrify bespoke plaid actually green juice tofu. IPhone direct trade street art put a bird on it tumblr. Snackwave skateboard craft beer organic.

Lo-fi edison bulb farm-to-table, keytar tumblr photo booth poke williamsburg seitan cloud bread plaid occupy. DIY irony lo-fi kombucha woke. Iceland artisan whatever, humblebrag pitchfork wayfarers tilde vinyl godard pork belly man braid kickstarter jean shorts succulents. Meditation unicorn small batch, jean shorts literally trust fund green juice hot chicken. Paleo iceland tattooed celiac whatever gluten-free drinking vinegar vape listicle. Sriracha 8-bit post-ironic normcore kinfolk mustache truffaut organic pop-up.

Direct trade meh yuccie quinoa kickstarter intelligentsia whatever leggings four dollar toast fam waistcoat fixie ethical. Cold-pressed woke tumblr echo park disrupt wolf poutine mumblecore yr. Kickstarter celiac cornhole deep v chartreuse drinking vinegar edison bulb af next level. Blue bottle chambray pour-over beard, hot chicken cardigan fashion axe.",
  author_id: user4.id,
  due_date: Date.today + 30,
  funding_goal: 2500,
  image_url: "http://res.cloudinary.com/paul-ryan/image/upload/v1517897259/fantasy-game.jpg"
)

project6 = Project.create(
  title: "A cup of coffee",
  blurb: "I will send each of you one cup of coffee!",
  description: "Selfies hell of gochujang, pug try-hard organic pabst bespoke migas adaptogen whatever taxidermy. Leggings farm-to-table prism paleo, lyft godard poke salvia thundercats 3 wolf moon fixie iPhone tbh VHS. Artisan meh kitsch chicharrones, farm-to-table microdosing mixtape squid. Wolf photo booth chambray, drinking vinegar cronut af microdosing four dollar toast cold-pressed synth. Meditation lumbersexual you probably haven't heard of them pinterest cardigan craft beer.

Artisan tumblr fam poutine umami raw denim pok pok tattooed narwhal swag. Post-ironic artisan austin gluten-free pour-over YOLO man braid tumblr. Echo park la croix butcher, dreamcatcher hot chicken raclette keytar mixtape plaid glossier. Pok pok tacos drinking vinegar jianbing art party. You probably haven't heard of them narwhal viral vape hot chicken distillery taxidermy forage live-edge fingerstache twee food truck yr blog.

Church-key pabst sriracha jean shorts before they sold out vice cold-pressed. Chillwave whatever humblebrag meditation art party, ennui hell of tbh af four dollar toast kogi. Trust fund enamel pin dreamcatcher woke celiac blog. Cray synth butcher artisan single-origin coffee godard. Crucifix next level enamel pin umami selvage neutra gentrify whatever vexillologist put a bird on it.",
  author_id: user3.id,
  due_date: Date.today + 30,
  funding_goal: 5,
  image_url: "http://res.cloudinary.com/paul-ryan/image/upload/v1517897255/coffee-cup.jpg"
)
