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
    user1 = User.create!(
        username: 'Tians', 
        email: 'tx2@g.ucla.edu', 
        password: 'password'
    )

    user2 = User.create!(
        username: 'motherlover', 
        email: 'motherlover@fatherlover.com', 
        password: 'password'
    )

    user3 = User.create!(
        username: 'jiejie', 
        email: 'jiejie@gege.com', 
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
        body: "The first time I heard about a Michelin star restaurant was when I was visiting my boyfriend in the US. The now-husband-then-boyfriend obviously wanted to stay on top of his courting game. He had reserved a table for us at a two-Michelin star Italian restaurant in San Francisco. I said, ‘Oh cool, that’s really sweet’. I missed the Michelin part completely. I really thought it was some kind of a joke towards the Michelin Man (the guy who sells tires, remember?)",
        author_id: 1,
        category_id: 1
        )

    story2 = Story.create!(
        title: "How To Ace Eating A Tasting Menu",
        body: "But what is a Michelin Star dining experience like?It is one of those life-changing experiences. Your first time will feel awkward, overwhelming, scary, stiff, ludicrous, orgasmic, and exceptionally satisfying at the same time. Tactically, it is a 5–12 course meal spread over about 3 hours and 1,400–2,200 calories in a single sit-down dinner. It is a progressive experience which usually gets better with every course and sometimes more dramatic too. You can expect the Chef’s personality and local produce to feature prominently on the menu. There are no doggie-bags, you snooze, you lose. Sometimes there’s even a surprise course you get to take home with you for the following day. On average, a two Michelin-star restaurant costs $250* per head. Given the price, you can also expect to feel boujee for the night.For the first few times, my middle-classiness simply couldn’t fathom how food could cost this much. It felt uncomfortable. 5 years and 14 restaurants later, I’m beginning to understand it better. These experiences now feel very religious for both Prashant and I. We go into it with deep respect for the Chef, their craft and their passion.As I continue to date my husband through this highly seductive series of Michelin-star experiences, it only makes sense that I have a gameplan. You can’t be careless going into this meal — the prep only adds to your ability to respect the food on the table. Here are some key parts of my strategy to eat a 2,000 calorie meal at a fine-dining place.",
        author_id: 2,
        category_id: 4
        )

    story3 = Story.create!(
        title: "10 Life-Changing Lessons I Learned From Travel",
        body: "In the last ten years, I’ve been lucky enough to do a lot of travelling. I’ve been to some amazing places, met some incredible people and had some once-in-a-lifetime experiences. Along the way, I’ve learned some valuable lessons that have changed my life for the better. Here are ten of the most important ones.

1. Life is short — make the most of it
This is probably the most important lesson I’ve learned. Life is incredibly short and it can be over in the blink of an eye. That’s why it’s so important to make the most of every single day. Do things that make you happy, spend time with the people you love and don’t take anything for granted.

2. It’s OK to be scared

When you’re travelling, you’ll inevitably find yourself in some scary situations. But that’s OK! Being scared is normal and it doesn’t mean you’re a coward. It just means you’re human. So, don’t be afraid to face your fears head-on. It’s the only way to overcome them.

3. You don’t need much to be happy

One of the best things about travelling is that it makes you realise how little you actually need to be happy. When you’re on the road, all you have is your backpack and the clothes on your back. And yet, you can still have the time of your life. It’s a great reminder that material possessions aren’t everything.

4. There’s no such thing as a perfect trip

No matter how well you plan your trip, things will always go wrong. You might miss your bus, get lost or get sick. But that’s all part of the adventure! Embrace the chaos and roll with the punches. It’s all part of the fun.

5. People are basically good

One of the best things about travel is the people you meet along the way. There are good people everywhere you go, no matter what country you’re in. People are friendly, helpful and hospitable. It’s a great reminder that, despite what you see on the news, the world is a good place.

6. It’s OK to be alone

One of the biggest fears people have is travelling alone. But it’s actually a great experience! It’s a chance to learn more about yourself and what you’re capable of. It’s also a great opportunity to meet new people. So, don’t be afraid to travel solo. It’s one of the best things you can do.

7. There’s no such thing as a perfect place

No matter where you go, you’ll always find imperfections. There’s no such thing as a perfect place. So, don’t waste your time searching for it. Instead, learn to appreciate the beauty in imperfection. It’s what makes life interesting.

8. You can’t please everyone

One of the hardest things to accept is that you can’t please everyone. You’ll never find a place that everyone loves. And you’ll never find a travel companion who agrees with everything you want to do. That’s OK! It’s normal. Just go with the flow and do what makes you happy.

9. It’s OK to make mistakes

When you’re travelling, you’ll make lots of mistakes. You might get lost, miss your train or say the wrong thing. But that’s OK! It’s all part of the learning process. So, don’t beat yourself up about it. Just laugh it off and carry on.

10. The best things in life are free

One of the best things about travel is that it reminds you that the best things in life are free. You don’t need to spend a lot of money to have a good time. Sometimes, the simplest things are the most fun. So, don’t be afraid to try new things and get off the beaten path.

These are just some of the life-changing lessons I’ve learned from travel. I’m sure there are many more. But these are the ones that have had the biggest impact on me. I hope they’ll have a similar effect on you.",
        author_id: 3,
        category_id: 8
        )
    
    puts "Done!"
end