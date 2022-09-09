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
    Category.destroy_all
    Story.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('categories')
    ApplicationRecord.connection.reset_pk_sequence!('stories')

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

    puts "Creating stories..."

    story1 = Story.create!(
        title: "5 Mistakes Too Many People Make When Trying to Build Muscle",
        body: "1. Not sleeping enough If you want to build muscle, you need to be sleeping a lot. You should be aiming for 8 hours every night. Stick to a consistent sleep/wake schedule and ensure you have at least 8 hours between your sleep and wake times. 2. Not eating enough protein To stimulate muscle protein synthesis, you need to be consuming at least 30g of protein per sitting, and at least 1g per pound of body weight over the whole day. 3. Not managing stress When you’re stressed, your body releases cortisol. Cortisol will sabotage your muscle growth. Make sure you include stress management practices in your day to day routine. 4. Not staying consistent Consistency is the number one secret to putting on muscle. Show up regularly, and you will be rewarded. It’s going to be really hard to put on muscle if you don’t stay consistent. Find a program and routine you can stick to. 5. Not prioritizing recovery You won’t put on muscle if you don’t make time for recovery.",
        author_id: 1,
        category_id: 1
        )
    
    puts "Done!"
end