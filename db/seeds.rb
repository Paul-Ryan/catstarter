# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
User.create(username: 'Paul', email: 'paul.ryan.iii@gmail.com', password: 'dinosaur1')
User.create(username: 'Dana', email: 'dana@email.com', password: 'dinosaur2')
User.create(username: 'Bart', email: 'bart@cat.com', password: 'dinosaur3')
User.create(username: 'Bonny', email: 'bonny@cat.com', password: 'dinosaur4')
