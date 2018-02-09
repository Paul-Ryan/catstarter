# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Project.delete_all
Reward.delete_all

user1 = User.create(username: 'demoLogin', email: 'demo@email.com', password: 'password')
user2 = User.create(username: 'Paul', email: 'paul.ryan.iii@gmail.com', password: 'dinosaur1')
user3 = User.create(username: 'Dana', email: 'dana@email.com', password: 'dinosaur2')
user4 = User.create(username: 'Brenna', email: 'brenna@email.com', password: 'dinosaur5')
user5 = User.create(username: 'Bart', email: 'bart@cat.com', password: 'dinosaur3')
user6 = User.create(username: 'Bonny', email: 'bonny@cat.com', password: 'dinosaur4')
user7 = User.create(username: 'Dave', email: 'dave@email.com', password: 'password7')
user8 = User.create(username: 'Sally', email: 'sally@email.com', password: 'dinosaur8')
user9 = User.create(username: 'Jack', email: 'jack@email.com', password: 'dinosaur9')
user10 = User.create(username: 'Elsa', email: 'elsa@email.com', password: 'dinosaur10')
user11 = User.create(username: 'Rory', email: 'rory@cat.com', password: 'dinosaur11')
user12 = User.create(username: 'Frankie', email: 'frankie@cat.com', password: 'dinosaur12')

project1 = Project.create(
  title: "My great-great-grandfather's cast iron pan",
  blurb: "These pans are made using secret family iron smithing techniques passed down through generations",
  description: "Lorem ipsum dolor amet shoreditch viral vaporware beard williamsburg. Tumblr artisan sartorial, kale chips knausgaard irony selvage cloud bread tumeric ennui 3 wolf moon lumbersexual aesthetic godard. Organic pour-over bushwick everyday carry sustainable aesthetic. Food truck bitters master cleanse typewriter offal photo booth man bun selfies. Chicharrones pok pok biodiesel gluten-free cred succulents portland. Semiotics 3 wolf moon adaptogen you probably haven't heard of them, readymade yuccie cliche ethical PBR&B authentic. Vinyl brunch keffiyeh kickstarter snackwave, scenester deep v woke four loko neutra gochujang disrupt craft beer beard coloring book. Adaptogen lyft mlkshk food truck. Chartreuse locavore succulents banjo irony XOXO vegan small batch retro health goth. Hashtag venmo glossier, bespoke leggings sriracha pok pok tilde artisan cold-pressed kombucha 90's cloud bread. Kale chips vice locavore church-key, flannel before they sold out single-origin coffee 8-bit. Before they sold out four loko subway tile marfa offal forage pabst.",
  author_id: user1.id,
  due_date: Date.today + 14,
  funding_goal: 2000,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897262/food.jpg"
)

project2 = Project.create(
  title: "Bespoke x-ray glasses",
  blurb: "Keep away from mirrors",
  description: "Edison bulb pitchfork typewriter normcore. Poke readymade af swag pour-over la croix tilde kickstarter jianbing pok pok 3 wolf moon 90's affogato letterpress. Mustache copper mug poke kale chips food truck, ennui jianbing keffiyeh. Before they sold out selfies pour-over hammock post-ironic, mlkshk hot chicken shoreditch af tumblr glossier meggings. Authentic four dollar toast plaid, taiyaki pour-over everyday carry poutine snackwave jean shorts godard thundercats PBR&B pop-up sartorial tilde. Celiac squid kogi, butcher food truck messenger bag kale chips tumblr.Direct trade meggings godard heirloom. Tousled distillery narwhal, lo-fi pok pok microdosing tattooed post-ironic tbh. 90's forage thundercats fixie +1 readymade hoodie post-ironic swag vexillologist seitan bitters hot chicken gastropub. Swag shabby chic cliche kitsch fashion axe paleo succulents fingerstache tofu locavore vinyl unicorn polaroid artisan fanny pack. Listicle umami air plant vape edison bulb helvetica sartorial sriracha raclette. Truffaut vinyl knausgaard post-ironic authentic unicorn glossier raw denim you probably haven't heard of them leggings thundercats everyday carry yr. Whatever food truck helvetica keffiyeh salvia jean shorts selfies activated charcoal.",
  author_id: user2.id,
  due_date: Date.today + 23,
  funding_goal: 4000,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897262/cool-glasses.jpg"
)

project3 = Project.create(
  title: "Notebooks made of recycled worse notebooks",
  blurb: "College-ruled notebooks for writing your thoughts, feelings, hopes, dreams or whatever",
  description: "Street art austin selfies neutra portland asymmetrical fashion axe kinfolk fingerstache. Flannel deep v trust fund enamel pin brunch meh woke try-hard biodiesel letterpress. Williamsburg skateboard gastropub butcher chicharrones activated charcoal. Umami post-ironic af, poutine microdosing small batch master cleanse. Shaman scenester synth gochujang. Edison bulb stumptown tumeric distillery drinking vinegar health goth meggings iPhone humblebrag master cleanse artisan. Slow-carb tattooed tousled direct trade fam selvage food truck. Seitan vaporware pour-over, succulents trust fund scenester VHS keffiyeh. Hoodie neutra fingerstache, marfa coloring book literally post-ironic tofu vaporware semiotics portland thundercats bitters health goth. Disrupt yr woke, before they sold out mumblecore prism fanny pack ramps.",
  author_id: user3.id,
  due_date: Date.today + 8,
  funding_goal: 300,
  image_url: "http://res.cloudinary.com/paul-ryan/image/upload/v1517897259/thought-catalog.jpg"
)

project4 = Project.create(
  title: "Bowl with a duck on it",
  blurb: "First of a series of bowls to hold fruit!",
  description: "Lorem ipsum dolor amet before they sold out umami YOLO, next level normcore wolf meggings subway tile hashtag fixie ramps listicle +1 single-origin coffee sriracha. Craft beer jianbing humblebrag, venmo heirloom food truck master cleanse. Green juice ennui microdosing, taxidermy poutine tattooed venmo selfies yr succulents celiac snackwave bicycle rights. VHS bespoke blog paleo vaporware cronut. Cornhole freegan trust fund thundercats. Tilde plaid four loko fashion axe viral stumptown. Taiyaki heirloom bitters selfies crucifix, cliche helvetica truffaut. Authentic organic iceland mlkshk, microdosing tilde butcher keffiyeh marfa fanny pack. Church-key beard ramps af tote bag twee. 3 wolf moon yuccie bushwick man braid, cornhole selfies yr intelligentsia craft beer dreamcatcher la croix. Ugh normcore literally XOXO selvage cold-pressed +1 venmo fam chia hoodie raw denim pork belly dreamcatcher mumblecore. Enamel pin messenger bag chambray kogi 8-bit yr echo park twee. PBR&B pug gastropub umami, paleo brunch hexagon tacos. Quinoa pop-up brooklyn bushwick hella farm-to-table williamsburg, hell of lo-fi. Quinoa crucifix activated charcoal before they sold out. Viral hot chicken direct trade pop-up enamel pin ugh. Craft beer typewriter tattooed iPhone taxidermy blog sriracha vexillologist man braid leggings chia chambray wolf banjo. Single-origin coffee paleo bushwick schlitz deep v pabst readymade hoodie cold-pressed direct trade bitters kickstarter raw denim woke.",
  author_id: user1.id,
  due_date: Date.today + 45,
  funding_goal: 1000000,
  image_url: "http://res.cloudinary.com/paul-ryan/image/upload/v1517897261/yellow-bowl.jpg"
)

project5 = Project.create(
  title: "Boat Zone: a strategy game where you play the boat",
  blurb: "Upgrade your and parrots and shiver your timbers in this real-time fantasy epic",
  description: "Blue bottle paleo sartorial polaroid plaid austin. Mlkshk ramps cold-pressed live-edge, stumptown gentrify bespoke plaid actually green juice tofu. IPhone direct trade street art put a bird on it tumblr. Snackwave skateboard craft beer organic. Lo-fi edison bulb farm-to-table, keytar tumblr photo booth poke williamsburg seitan cloud bread plaid occupy. DIY irony lo-fi kombucha woke. Iceland artisan whatever, humblebrag pitchfork wayfarers tilde vinyl godard pork belly man braid kickstarter jean shorts succulents. Meditation unicorn small batch, jean shorts literally trust fund green juice hot chicken. Paleo iceland tattooed celiac whatever gluten-free drinking vinegar vape listicle. Sriracha 8-bit post-ironic normcore kinfolk mustache truffaut organic pop-up. Direct trade meh yuccie quinoa kickstarter intelligentsia whatever leggings four dollar toast fam waistcoat fixie ethical. Cold-pressed woke tumblr echo park disrupt wolf poutine mumblecore yr. Kickstarter celiac cornhole deep v chartreuse drinking vinegar edison bulb af next level. Blue bottle chambray pour-over beard, hot chicken cardigan fashion axe.",
  author_id: user4.id,
  due_date: Date.today + 12,
  funding_goal: 2500,
  image_url: "http://res.cloudinary.com/paul-ryan/image/upload/v1517897259/fantasy-game.jpg"
)

project6 = Project.create(
  title: "A cup of coffee",
  blurb: "I will send each of you one cup of coffee!",
  description: "Selfies hell of gochujang, pug try-hard organic pabst bespoke migas adaptogen whatever taxidermy. Leggings farm-to-table prism paleo, lyft godard poke salvia thundercats 3 wolf moon fixie iPhone tbh VHS. Artisan meh kitsch chicharrones, farm-to-table microdosing mixtape squid. Wolf photo booth chambray, drinking vinegar cronut af microdosing four dollar toast cold-pressed synth. Meditation lumbersexual you probably haven't heard of them pinterest cardigan craft beer. Artisan tumblr fam poutine umami raw denim pok pok tattooed narwhal swag. Post-ironic artisan austin gluten-free pour-over YOLO man braid tumblr. Echo park la croix butcher, dreamcatcher hot chicken raclette keytar mixtape plaid glossier. Pok pok tacos drinking vinegar jianbing art party. You probably haven't heard of them narwhal viral vape hot chicken distillery taxidermy forage live-edge fingerstache twee food truck yr blog. Church-key pabst sriracha jean shorts before they sold out vice cold-pressed. Chillwave whatever humblebrag meditation art party, ennui hell of tbh af four dollar toast kogi. Trust fund enamel pin dreamcatcher woke celiac blog. Cray synth butcher artisan single-origin coffee godard. Crucifix next level enamel pin umami selvage neutra gentrify whatever vexillologist put a bird on it.",
  author_id: user3.id,
  due_date: Date.today + 19,
  funding_goal: 5,
  image_url: "http://res.cloudinary.com/paul-ryan/image/upload/v1517897255/coffee-cup.jpg"
)

project7 = Project.create(
  title: "A big cat",
  blurb: "This cat needs your funding",
  description: "Prism drinking vinegar before they sold out etsy kinfolk banh mi trust fund biodiesel cliche man braid. Ethical coloring book tofu art party 90's listicle. Listicle cornhole drinking vinegar unicorn crucifix, salvia gochujang iPhone leggings. Bitters microdosing aesthetic kinfolk, man braid pickled yr taxidermy mlkshk viral meditation cold-pressed humblebrag prism. Gastropub gentrify ramps, synth semiotics YOLO tofu locavore unicorn squid pug. Kickstarter VHS plaid vice, keytar YOLO bushwick salvia pinterest sriracha retro selfies occupy pour-over jianbing. Semiotics scenester listicle iPhone four loko stumptown vexillologist ramps selfies lomo slow-carb air plant PBR&B franzen organic. Post-ironic paleo hexagon, sriracha DIY plaid 8-bit tilde. Brunch wolf dreamcatcher celiac seitan banjo poutine venmo food truck tousled try-hard chambray kale chips taiyaki chicharrones. Squid listicle readymade williamsburg cronut.",
  author_id: user5.id,
  due_date: Date.today + 2,
  funding_goal: 500,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897255/cat.jpg"
)

project8 = Project.create(
  title: "Really fast wheels",
  blurb: "Special wheels for your car or your friends car--look cool and go fast",
  description: "Godard brunch prism, sartorial quinoa flexitarian jean shorts green juice gochujang vegan +1. Actually bitters 8-bit distillery affogato meggings. Portland before they sold out bushwick, truffaut plaid umami kitsch polaroid skateboard kogi. Shoreditch you probably haven't heard of them roof party live-edge neutra chia mixtape meditation fashion axe stumptown brooklyn 90's helvetica coloring book. Lyft iPhone venmo heirloom, tofu sriracha master cleanse affogato pork belly direct trade organic sustainable banh mi. Raclette lumbersexual readymade literally, cred succulents tofu cardigan photo booth whatever +1 activated charcoal schlitz listicle tacos. Wolf food truck yuccie, drinking vinegar chia you probably haven't heard of them shaman edison bulb woke adaptogen truffaut green juice pork belly DIY fixie. Actually drinking vinegar before they sold out VHS artisan, portland banh mi cronut banjo small batch leggings yr wolf shoreditch. Disrupt neutra hella +1 bitters sartorial. Thundercats kale chips swag butcher. Pitchfork freegan trust fund blue bottle jean shorts, man bun poutine plaid messenger bag cardigan distillery. Fingerstache tbh portland try-hard mlkshk drinking vinegar.",
  author_id: user6.id,
  due_date: Date.today + 40,
  funding_goal: 8000,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897260/wheels.jpg"
)

project9 = Project.create(
  title: "Old fashioned band",
  blurb: "I've already got a vintage microphone, so we're halfway there",
  description: "Forage pickled jean shorts ethical pour-over tumeric af kickstarter chia try-hard. Cred vexillologist VHS pour-over chicharrones vape. Master cleanse VHS vinyl, cliche helvetica PBR&B kinfolk fingerstache kitsch. Art party cloud bread meggings post-ironic plaid vexillologist. Lo-fi man bun meditation art party subway tile chillwave franzen stumptown butcher gluten-free retro bicycle rights skateboard. Shoreditch seitan wayfarers chicharrones post-ironic chartreuse flexitarian tofu mlkshk. Cliche taxidermy sustainable, master cleanse adaptogen thundercats green juice brunch snackwave hot chicken kombucha locavore small batch tofu.",
  author_id: user9.id,
  due_date: Date.today + 19,
  funding_goal: 5000,
  image_url: "http://res.cloudinary.com/paul-ryan/image/upload/v1517897254/microphone.jpg"
)

project10 = Project.create(
  title: "Magic wood floorboards",
  blurb: "Boards cut from a magic forest with elves and stuff",
  description: "Williamsburg normcore readymade tofu, mumblecore brooklyn fashion axe occupy swag adaptogen hell of paleo poke. Pickled lumbersexual hella tilde, raclette hashtag selvage. Hoodie twee neutra, vegan ennui schlitz cornhole pour-over lumbersexual pinterest chia. Seitan venmo hell of migas godard salvia. Marfa palo santo sriracha, fixie ethical yuccie artisan sustainable tumblr mustache echo park cray snackwave cold-pressed. Activated charcoal austin VHS, lumbersexual letterpress occupy wolf +1 messenger bag etsy chicharrones tacos. Pok pok lomo vape live-edge raw denim, meggings 3 wolf moon organic intelligentsia bicycle rights twee craft beer adaptogen. Migas kitsch direct trade cardigan. Put a bird on it enamel pin chartreuse before they sold out salvia. Cray fixie cornhole freegan. Ramps lumbersexual sartorial chambray selvage scenester, cred occupy butcher master cleanse post-ironic.",
  author_id: user11.id,
  due_date: Date.today + 60,
  funding_goal: 1234,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897262/floorboards.jpg"
)

project11 = Project.create(
  title: "Yes: a book of poems about being cool",
  blurb: "cigarettes, burbon, cats",
  description: "Succulents butcher jean shorts DIY squid mumblecore. VHS etsy whatever next level copper mug literally. Palo santo pitchfork blue bottle, hammock meditation edison bulb authentic forage hoodie sartorial aesthetic affogato disrupt. Dreamcatcher master cleanse readymade shaman waistcoat locavore green juice. Squid marfa fixie mustache meggings edison bulb. Vinyl food truck vexillologist venmo la croix authentic, kitsch sartorial fashion axe sustainable twee. Selvage bushwick blog viral lo-fi flannel before they sold out scenester, fashion axe cloud bread sriracha slow-carb intelligentsia chartreuse. Tbh gochujang chambray meditation, vinyl trust fund bicycle rights raw denim tattooed. Vinyl banh mi leggings iceland echo park vape meggings beard. Twee beard butcher YOLO retro. Disrupt readymade YOLO chillwave. 90's artisan sriracha ennui iceland meh coloring book chicharrones tbh DIY photo booth woke.",
  author_id: user4.id,
  due_date: Date.today + 22,
  funding_goal: 100000,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897261/yes.jpg"
)

project12 = Project.create(
  title: "Add salad to the menu at the restaurant that seats people at benches",
  blurb: "This will be a really good salad, but only if you fund it",
  description: "Lorem ipsum dolor amet mustache waistcoat stumptown messenger bag ramps portland. Biodiesel coloring book portland listicle knausgaard. Truffaut keffiyeh listicle, mixtape franzen vexillologist cloud bread next level 3 wolf moon squid ugh freegan live-edge thundercats. Before they sold out pitchfork iPhone banh mi chia, pabst cornhole bicycle rights organic enamel pin mixtape truffaut try-hard dreamcatcher kombucha. Irony lomo cold-pressed, lo-fi edison bulb vaporware chambray selvage photo booth. Letterpress forage glossier master cleanse cliche fashion axe ugh authentic gluten-free cronut keffiyeh sustainable plaid snackwave. Jean shorts kickstarter edison bulb gochujang poutine chillwave. Street art heirloom kogi banh mi hammock. Actually neutra venmo, edison bulb raclette paleo pabst 90's leggings. Austin poke truffaut typewriter small batch celiac.",
  author_id: user10.id,
  due_date: Date.today + 27,
  funding_goal: 800,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897262/salad-lunch.jpg"
)

project13 = Project.create(
  title: "Creative Campfire Pie Iron Cookbook",
  blurb: "We're taking mountain pies, campfire pies, jaffles, and pudgie pies to a whole new level with our innovative pie iron cookbook!",
  description: "",
  author_id: user5.id,
  due_date: Date.today + 4,
  funding_goal: 10000,
  image_url: "http://res.cloudinary.com/paul-ryan/image/upload/v1517897260/fire.jpg"
)

project14 = Project.create(
  title: "Capt. Bart Brew Co. - A Progressive Fermentation Project",
  blurb: "Cats brew too! We ALL like beer. Help us become one of the first notable breweries with a cat head brewer!",
  description: "Readymade shaman XOXO umami franzen, lumbersexual austin crucifix YOLO. Vexillologist stumptown yuccie small batch kinfolk, gentrify lo-fi tumblr DIY subway tile banjo art party gluten-free organic artisan. Mixtape pop-up pinterest williamsburg health goth cred small batch kinfolk hot chicken bushwick. Enamel pin food truck man braid godard. Mustache blue bottle retro, crucifix vape skateboard swag leggings polaroid waistcoat. Distillery yuccie salvia plaid intelligentsia cliche meditation shabby chic church-key wayfarers hot chicken la croix. Portland meggings street art, PBR&B poutine heirloom kombucha etsy pabst succulents vape dreamcatcher blue bottle narwhal artisan.",
  author_id: user8.id,
  due_date: Date.today + 9,
  funding_goal: 34000,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897258/taps.jpg"
)

project15 = Project.create(
  title: "100 Wildlife Inspired Teas",
  blurb: "I am creating 100 wildlife inspired teas, digitally printed from my illustrations of British mammals, birds and insects.",
  description: "Deep v meggings put a bird on it, hoodie etsy fingerstache cardigan leggings knausgaard fixie. Meggings ugh tbh sartorial viral. Adaptogen quinoa schlitz everyday carry helvetica asymmetrical bushwick paleo man braid try-hard pabst stumptown man bun kinfolk. Ennui hot chicken aesthetic activated charcoal. Knausgaard ennui organic, squid heirloom brooklyn pabst sustainable cardigan forage deep v. Glossier mixtape cloud bread, prism vinyl kitsch pinterest viral meditation. Scenester fingerstache woke 3 wolf moon, banh mi tousled tacos before they sold out authentic drinking vinegar twee tumblr. Live-edge organic unicorn etsy banh mi direct trade blog activated charcoal XOXO chillwave pinterest cred yuccie echo park. Humblebrag swag iceland vaporware kickstarter master cleanse, aesthetic vinyl microdosing meggings 3 wolf moon plaid bitters single-origin coffee lomo. Ramps lo-fi locavore vice unicorn, tumblr venmo intelligentsia slow-carb single-origin coffee austin. Ennui banjo try-hard squid tote bag retro kinfolk gentrify banh mi hella everyday carry. Live-edge adaptogen green juice lomo ethical.",
  author_id: user9.id,
  due_date: Date.today + 13,
  funding_goal: 10700,
  image_url: "http://res.cloudinary.com/paul-ryan/image/upload/v1517897259/tea.jpg"
)

project16 = Project.create(
  title: "The Best Coffee You've Ever Made... Now in a Pod",
  blurb: "Incredible speciality coffee, packed into NespressoⓇ compatible pods within 7 days of roasting.",
  description: "Fingerstache live-edge dreamcatcher, next level gluten-free palo santo subway tile. Gluten-free tote bag you probably haven't heard of them hammock, messenger bag fingerstache pok pok seitan jianbing. Fixie viral tumblr iceland disrupt, art party vice knausgaard bespoke before they sold out vegan slow-carb lyft. Selfies meditation skateboard unicorn salvia cornhole. Plaid disrupt knausgaard lo-fi ethical. Locavore jianbing authentic try-hard chambray. Four dollar toast bitters chartreuse aesthetic typewriter pop-up. Letterpress raw denim green juice raclette helvetica. Mixtape af woke, kale chips taxidermy gentrify hell of flannel. Truffaut fashion axe messenger bag wolf vexillologist kickstarter deep v fingerstache.",
  author_id: user10.id,
  due_date: Date.today + 15,
  funding_goal: 1000,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897258/coffee-friends.jpg"
)

project17 = Project.create(
  title: "Dishes from around the world and two croissants",
  blurb: "Explore the globe through a bunch of food delivered to you in this one-of-a-kind food-delivery startup",
  description: "Fingerstache live-edge dreamcatcher, next level gluten-free palo santo subway tile. Gluten-free tote bag you probably haven't heard of them hammock, messenger bag fingerstache pok pok seitan jianbing. Fixie viral tumblr iceland disrupt, art party vice knausgaard bespoke before they sold out vegan slow-carb lyft. Selfies meditation skateboard unicorn salvia cornhole. Plaid disrupt knausgaard lo-fi ethical. Locavore jianbing authentic try-hard chambray. Four dollar toast bitters chartreuse aesthetic typewriter pop-up. Letterpress raw denim green juice raclette helvetica. Mixtape af woke, kale chips taxidermy gentrify hell of flannel. Truffaut fashion axe messenger bag wolf vexillologist kickstarter deep v fingerstache.",
  author_id: user11.id,
  due_date: Date.today + 19,
  funding_goal: 700,
  image_url: "http://res.cloudinary.com/paul-ryan/image/upload/v1517897257/cooking-plates.jpg"
)

project18 = Project.create(
  title: "Start a new space program where I build rockets in my garage",
  blurb: "For ten-thousand dollars I'll put you on my first rocket to the moon",
  description: "Fingerstache live-edge dreamcatcher, next level gluten-free palo santo subway tile. Gluten-free tote bag you probably haven't heard of them hammock, messenger bag fingerstache pok pok seitan jianbing. Fixie viral tumblr iceland disrupt, art party vice knausgaard bespoke before they sold out vegan slow-carb lyft. Selfies meditation skateboard unicorn salvia cornhole. Plaid disrupt knausgaard lo-fi ethical. Locavore jianbing authentic try-hard chambray. Four dollar toast bitters chartreuse aesthetic typewriter pop-up. Letterpress raw denim green juice raclette helvetica. Mixtape af woke, kale chips taxidermy gentrify hell of flannel. Truffaut fashion axe messenger bag wolf vexillologist kickstarter deep v fingerstache.",
  author_id: user12.id,
  due_date: Date.today + 10,
  funding_goal: 1000,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897257/stars.jpg"
)

project19 = Project.create(
  title: "A year of photography inspried by this camera my mom bought me",
  blurb: "This camera was really expensive, so I'd better show my parents that I'm using it",
  description: "Fingerstache live-edge dreamcatcher, next level gluten-free palo santo subway tile. Gluten-free tote bag you probably haven't heard of them hammock, messenger bag fingerstache pok pok seitan jianbing. Fixie viral tumblr iceland disrupt, art party vice knausgaard bespoke before they sold out vegan slow-carb lyft. Selfies meditation skateboard unicorn salvia cornhole. Plaid disrupt knausgaard lo-fi ethical. Locavore jianbing authentic try-hard chambray. Four dollar toast bitters chartreuse aesthetic typewriter pop-up. Letterpress raw denim green juice raclette helvetica. Mixtape af woke, kale chips taxidermy gentrify hell of flannel. Truffaut fashion axe messenger bag wolf vexillologist kickstarter deep v fingerstache.",
  author_id: user2.id,
  due_date: Date.today + 105,
  funding_goal: 1300,
  image_url: "http://res.cloudinary.com/paul-ryan/image/upload/v1517897255/camera.jpg"
)

project20 = Project.create(
  title: "Man fights the moon",
  blurb: "With enough money I think we can punch the moon back to where it came from somehow",
  description: "Fingerstache live-edge dreamcatcher, next level gluten-free palo santo subway tile. Gluten-free tote bag you probably haven't heard of them hammock, messenger bag fingerstache pok pok seitan jianbing. Fixie viral tumblr iceland disrupt, art party vice knausgaard bespoke before they sold out vegan slow-carb lyft. Selfies meditation skateboard unicorn salvia cornhole. Plaid disrupt knausgaard lo-fi ethical. Locavore jianbing authentic try-hard chambray. Four dollar toast bitters chartreuse aesthetic typewriter pop-up. Letterpress raw denim green juice raclette helvetica. Mixtape af woke, kale chips taxidermy gentrify hell of flannel. Truffaut fashion axe messenger bag wolf vexillologist kickstarter deep v fingerstache.",
  author_id: user3.id,
  due_date: Date.today + 16,
  funding_goal: 10000,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897254/moon-fighter.jpg"
)

project21 = Project.create(
  title: "Noodles from another culture",
  blurb: "This project combines our love of noodles with the discovery of something new that is also relatively safe and actually not that different",
  description: "Fingerstache live-edge dreamcatcher, next level gluten-free palo santo subway tile. Gluten-free tote bag you probably haven't heard of them hammock, messenger bag fingerstache pok pok seitan jianbing. Fixie viral tumblr iceland disrupt, art party vice knausgaard bespoke before they sold out vegan slow-carb lyft. Selfies meditation skateboard unicorn salvia cornhole. Plaid disrupt knausgaard lo-fi ethical. Locavore jianbing authentic try-hard chambray. Four dollar toast bitters chartreuse aesthetic typewriter pop-up. Letterpress raw denim green juice raclette helvetica. Mixtape af woke, kale chips taxidermy gentrify hell of flannel. Truffaut fashion axe messenger bag wolf vexillologist kickstarter deep v fingerstache.",
  author_id: user4.id,
  due_date: Date.today + 15,
  funding_goal: 1000,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897256/noodles.jpg"
)

project21 = Project.create(
  title: "Catbag: A bag to hold all your cats",
  blurb: "Your friends will never know how many cats are in or out of the bag with this bag",
  description: "Fingerstache live-edge dreamcatcher, next level gluten-free palo santo subway tile. Gluten-free tote bag you probably haven't heard of them hammock, messenger bag fingerstache pok pok seitan jianbing. Fixie viral tumblr iceland disrupt, art party vice knausgaard bespoke before they sold out vegan slow-carb lyft. Selfies meditation skateboard unicorn salvia cornhole. Plaid disrupt knausgaard lo-fi ethical. Locavore jianbing authentic try-hard chambray. Four dollar toast bitters chartreuse aesthetic typewriter pop-up. Letterpress raw denim green juice raclette helvetica. Mixtape af woke, kale chips taxidermy gentrify hell of flannel. Truffaut fashion axe messenger bag wolf vexillologist kickstarter deep v fingerstache.",
  author_id: user5.id,
  due_date: Date.today + 25,
  funding_goal: 1300,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897253/great-bag.jpg"
)

project21 = Project.create(
  title: "Haunted things",
  blurb: "If you donate to this kickstarter you will be visited by three ghosts in the next four days and they will tell you boring stories from history",
  description: "Fingerstache live-edge dreamcatcher, next level gluten-free palo santo subway tile. Gluten-free tote bag you probably haven't heard of them hammock, messenger bag fingerstache pok pok seitan jianbing. Fixie viral tumblr iceland disrupt, art party vice knausgaard bespoke before they sold out vegan slow-carb lyft. Selfies meditation skateboard unicorn salvia cornhole. Plaid disrupt knausgaard lo-fi ethical. Locavore jianbing authentic try-hard chambray. Four dollar toast bitters chartreuse aesthetic typewriter pop-up. Letterpress raw denim green juice raclette helvetica. Mixtape af woke, kale chips taxidermy gentrify hell of flannel. Truffaut fashion axe messenger bag wolf vexillologist kickstarter deep v fingerstache.",
  author_id: user6.id,
  due_date: Date.today + 8,
  funding_goal: 220,
  image_url: "https://res.cloudinary.com/paul-ryan/image/upload/v1517897254/invisible-camera.jpg"
)


reward1 = Reward.create(
  project_id: project1.id,
  title: "One castiron pan",
  description: "I'll bring you a pan in my van.",
  reward_minimum_amount: 50
)

reward2 = Reward.create(
  project_id: project1.id,
  title: "Two castiron pans",
  description: "I'll mail you two pans, so you can cook two things at once.",
  reward_minimum_amount: 100
)

reward3 = Reward.create(
  project_id: project1.id,
  title: "Two pans and two lids",
  description: "Put the lids on the pans while you cook if you want.",
  reward_minimum_amount: 150
)

reward = Reward.create( project_id: project2.id, title: "Demo reward 1", description: "description of demo reward", reward_minimum_amount: 20)
reward = Reward.create( project_id: project2.id, title: "Demo reward 2", description: "description of demo reward", reward_minimum_amount: 50)
reward = Reward.create( project_id: project2.id, title: "Demo reward 3", description: "description of demo reward", reward_minimum_amount: 80)
reward = Reward.create( project_id: project2.id, title: "Demo reward 4", description: "description of demo reward", reward_minimum_amount: 200)

reward = Reward.create( project_id: project3.id, title: "Demo reward 1", description: "description of demo reward", reward_minimum_amount: 20)
reward = Reward.create( project_id: project3.id, title: "Demo reward 2", description: "description of demo reward", reward_minimum_amount: 50)
reward = Reward.create( project_id: project3.id, title: "Demo reward 3", description: "description of demo reward", reward_minimum_amount: 80)
reward = Reward.create( project_id: project3.id, title: "Demo reward 4", description: "description of demo reward", reward_minimum_amount: 200)

reward = Reward.create( project_id: project4.id, title: "Demo reward 1", description: "description of demo reward", reward_minimum_amount: 20)
reward = Reward.create( project_id: project4.id, title: "Demo reward 2", description: "description of demo reward", reward_minimum_amount: 50)
reward = Reward.create( project_id: project4.id, title: "Demo reward 3", description: "description of demo reward", reward_minimum_amount: 80)
reward = Reward.create( project_id: project4.id, title: "Demo reward 4", description: "description of demo reward", reward_minimum_amount: 200)

reward = Reward.create( project_id: project5.id, title: "Demo reward 1", description: "description of demo reward", reward_minimum_amount: 20)
reward = Reward.create( project_id: project5.id, title: "Demo reward 2", description: "description of demo reward", reward_minimum_amount: 50)
reward = Reward.create( project_id: project5.id, title: "Demo reward 3", description: "description of demo reward", reward_minimum_amount: 80)
reward = Reward.create( project_id: project5.id, title: "Demo reward 4", description: "description of demo reward", reward_minimum_amount: 200)

reward = Reward.create( project_id: project6.id, title: "Demo reward 1", description: "description of demo reward", reward_minimum_amount: 20)
reward = Reward.create( project_id: project6.id, title: "Demo reward 2", description: "description of demo reward", reward_minimum_amount: 50)
reward = Reward.create( project_id: project6.id, title: "Demo reward 3", description: "description of demo reward", reward_minimum_amount: 80)
reward = Reward.create( project_id: project6.id, title: "Demo reward 4", description: "description of demo reward", reward_minimum_amount: 200)

reward = Reward.create( project_id: project7.id, title: "Demo reward 1", description: "description of demo reward", reward_minimum_amount: 20)
reward = Reward.create( project_id: project7.id, title: "Demo reward 1", description: "description of demo reward", reward_minimum_amount: 20)
reward = Reward.create( project_id: project7.id, title: "Demo reward 2", description: "description of demo reward", reward_minimum_amount: 50)
reward = Reward.create( project_id: project7.id, title: "Demo reward 2", description: "description of demo reward", reward_minimum_amount: 50)

reward = Reward.create( project_id: project8.id, title: "Demo reward 3", description: "description of demo reward", reward_minimum_amount: 80)
reward = Reward.create( project_id: project8.id, title: "Demo reward 3", description: "description of demo reward", reward_minimum_amount: 80)
reward = Reward.create( project_id: project8.id, title: "Demo reward 4", description: "description of demo reward", reward_minimum_amount: 200)
reward = Reward.create( project_id: project8.id, title: "Demo reward 4", description: "description of demo reward", reward_minimum_amount: 200)



pledge1 = Pledge.create( project_id: project1.id, user_id: user1.id, pledge_amount: 10)
pledge2 = Pledge.create( project_id: project2.id, user_id: user1.id, pledge_amount: 15)
pledge3 = Pledge.create( project_id: project3.id, user_id: user1.id, pledge_amount: 15)
pledge4 = Pledge.create( project_id: project4.id, user_id: user1.id, pledge_amount: 100)

pledge1 = Pledge.create( project_id: project1.id, user_id: user2.id, pledge_amount: 20)
pledge2 = Pledge.create( project_id: project2.id, user_id: user2.id, pledge_amount: 150)
pledge3 = Pledge.create( project_id: project3.id, user_id: user2.id, pledge_amount: 15)
pledge4 = Pledge.create( project_id: project4.id, user_id: user2.id, pledge_amount: 100)

pledge1 = Pledge.create( project_id: project1.id, user_id: user3.id, pledge_amount: 15)
pledge2 = Pledge.create( project_id: project2.id, user_id: user3.id, pledge_amount: 15)
pledge3 = Pledge.create( project_id: project3.id, user_id: user3.id, pledge_amount: 20)
pledge4 = Pledge.create( project_id: project4.id, user_id: user3.id, pledge_amount: 100)

pledge1 = Pledge.create( project_id: project1.id, user_id: user4.id, pledge_amount: 100)
pledge2 = Pledge.create( project_id: project2.id, user_id: user4.id, pledge_amount: 15)
pledge3 = Pledge.create( project_id: project3.id, user_id: user4.id, pledge_amount: 15)
pledge4 = Pledge.create( project_id: project4.id, user_id: user4.id, pledge_amount: 100)

pledge1 = Pledge.create( project_id: project5.id, user_id: user5.id, pledge_amount: 10)
pledge2 = Pledge.create( project_id: project6.id, user_id: user5.id, pledge_amount: 15)
pledge3 = Pledge.create( project_id: project7.id, user_id: user5.id, pledge_amount: 15)
pledge4 = Pledge.create( project_id: project8.id, user_id: user5.id, pledge_amount: 100)

pledge1 = Pledge.create( project_id: project5.id, user_id: user6.id, pledge_amount: 10)
pledge2 = Pledge.create( project_id: project6.id, user_id: user6.id, pledge_amount: 15)
pledge3 = Pledge.create( project_id: project7.id, user_id: user6.id, pledge_amount: 15)
pledge4 = Pledge.create( project_id: project8.id, user_id: user6.id, pledge_amount: 100)

pledge1 = Pledge.create( project_id: project5.id, user_id: user7.id, pledge_amount: 10)
pledge2 = Pledge.create( project_id: project6.id, user_id: user7.id, pledge_amount: 15)
pledge3 = Pledge.create( project_id: project7.id, user_id: user7.id, pledge_amount: 15)
pledge4 = Pledge.create( project_id: project8.id, user_id: user7.id, pledge_amount: 100)

pledge1 = Pledge.create( project_id: project5.id, user_id: user8.id, pledge_amount: 10)
pledge2 = Pledge.create( project_id: project6.id, user_id: user8.id, pledge_amount: 15)
pledge3 = Pledge.create( project_id: project7.id, user_id: user8.id, pledge_amount: 15)
pledge4 = Pledge.create( project_id: project8.id, user_id: user8.id, pledge_amount: 100)
