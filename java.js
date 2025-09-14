function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        let isRead;
        if(this.read == true){
            isRead = "has been read";
        }
        else{
            isRead = "has not been read";
        }
        return infoString = `${this.title} by ${this.author}, ${pages} pages, ${isRead}`
        
    };
}

  const book = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
    console.log(book.info());

