class Book {
    constructor(id, bookArributes) {
        debugger
        this.id = id;
        this.title = bookArributes.title;
        this.category = bookArributes.category;
        this.description = bookArributes.description;
        this.image = bookArributes.image
        this.rating = bookArributes.rating
        this.likes = bookArributes.likes
        Book.all.push(this)
    }
}

book = Book.new(id, bookArributes)