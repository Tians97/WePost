# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
        username: 'Tians', 
        email: 'tx2@g.ucla.edu', 
        password: 'password'
    )

    puts "Creating categories..."

    catetory1 = Category.create!(title: "Fitness")
    catetory2 = Category.create!(title: "Sports")
    catetory3 = Category.create!(title: "Health")
    catetory4 = Category.create!(title: "Food")
    catetory5 = Category.create!(title: "Car")
    catetory6 = Category.create!(title: "Gaming")
    catetory7 = Category.create!(title: "Technology")
    catetory8 = Category.create!(title: "Travel")
    
    puts "Done!"
end