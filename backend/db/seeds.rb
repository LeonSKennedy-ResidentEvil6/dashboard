# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Book.destroy_all
# Review.destroy_all

book_1 = Book.create(title: "12 Rules for Life", author: "Jordan B. Peterson", category: "Philosophy", description: "What truth does the modern society needs to know? Renowned psychologist Jordan B. Peterson's answer to this most difficult of questions uniquely combines the hard-won truths of ancient tradition with the stunning revelations of cutting-edge scientific research.", image: "https://images.secondsale.com/images/a2ae38e59d7b53d4a83382346e53fd12.jpg", rating: "5", likes: "1000")
book_2 = Book.create(title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", category: "History", description: "How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms?", image: "https://images.secondsale.com/images/d8140a4b63ab813930990053734f971d.jpg", rating: "3", likes: "75")
book_3 = Book.create(title: "It", author: "Stephen King", category: "Fiction", description: "They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness.", image: "https://www.rarebookcellar.com/pictures/142880.JPG?v=1610145439", rating: "4", likes: "43")

Review.create(comment: "This is one of the best books I've read in years", book_id: book_1.id)
Review.create(comment: "Professor Harari is definitely one of the best thinkers in our time. I am humbled after reading this book.", book_id: book_2.id)
Review.create(comment: "What a masterpiece. I couldn't sleep for a whole week after reading it in my closet!", book_id: book_3.id)