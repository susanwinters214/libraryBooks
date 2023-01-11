class Book {
  constructor(id,  title, author, isRead) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isRead = false;
    }
}

class Library { 
   constructor( bookCount, books) {
    this.bookCount = 0;
    this.books = [];
  }

markRead(chkbx, id) {
    //Loop thru library books
    for (let i = 0;  i < this.bookCount.length;  i++)
    {
         if (this.books[i].id === id) {
             this.books[i].isRead = true;
             // CHANGE HTML ckbox chked attr to TRUE 
                break;
            }
    }    
  }

 addBook(id, txtTitle, txtAuthor, isRead) {
    console.log("I will add a book to the library");
    //create new book - passing in values
     this.books.push(new Book(id, txtTitle, txtAuthor, false)); 
    //Create new HTML table row with Title, Author & Read properties
     newRow = `<tr><td>{txtTitle}</td><td>{txtAuthor}</td><td>{true}</td></tr>`;
    //Append the Row to the table
     table.appendRow //? How do you write this in code?
    //Increment Library BookCount +1  
     this.BookCount++;
  }

    removeBook(id) {
       console.log("I will remove a specific book from the library");
    //Select the table row with Title, Author & Read properties
    //Remove the Row from the table
    //Decrement Library BookCount -1
  }
}