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
user4 = User.create(username: 'Bart', email: 'bart@cat.com', password: 'dinosaur3')
user5 = User.create(username: 'Bonny', email: 'bonny@cat.com', password: 'dinosaur4')

project1 = Project.create(
  title: "make an album",
  blurb: "cool local jamz!",
  description: "good music, and I'll buy you a coffee if you back me",
  author_id: user1.id,
  due_date: Date.today + 30,
  funding_goal: 2000,
  image_url: "https://commons.wikimedia.org/wiki/Main_Page#/media/File:Marmot-edit1.jpg"
)

project2 = Project.create(
  title: "make an IPA",
  blurb: "cool local beer",
  description: "good music, and I'll buy you a coffee if you back me",
  author_id: user2.id,
  due_date: Date.today + 30,
  funding_goal: 2000,
  image_url: "https://commons.wikimedia.org/wiki/Main_Page#/media/File:Marmot-edit1.jpg"
)

project3 = Project.create(
  title: "make a coffee",
  blurb: "cool local coffee!",
  description: "good music, and I'll buy you a coffee if you back me",
  author_id: user3.id,
  due_date: Date.today + 30,
  funding_goal: 2000,
  image_url: "https://commons.wikimedia.org/wiki/Main_Page#/media/File:Marmot-edit1.jpg"
)

project4 = Project.create(
  title: "make a poetry project",
  blurb: "cool local bookstore events!",
  description: "good music, and I'll buy you a coffee if you back me",
  author_id: user1.id,
  due_date: Date.today + 30,
  funding_goal: 2000,
  image_url: "https://commons.wikimedia.org/wiki/Main_Page#/media/File:Marmot-edit1.jpg"
)

project5 = Project.create(
  title: "make an artisanal toothbrush",
  blurb: "for after you drink coffee",
  description: "good music, and I'll buy you a coffee if you back me",
  author_id: user4.id,
  due_date: Date.today + 30,
  funding_goal: 2000,
  image_url: "https://commons.wikimedia.org/wiki/Main_Page#/media/File:Marmot-edit1.jpg"
)

project6 = Project.create(
  title: "make a hemp product",
  blurb: "cool local phone holder!",
  description: "good music, and I'll buy you a coffee if you back me",
  author_id: user3.id,
  due_date: Date.today + 30,
  funding_goal: 2000,
  image_url: "https://commons.wikimedia.org/wiki/Main_Page#/media/File:Marmot-edit1.jpg"
)
