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

markRead(id) {
    for (let i = 0;  i < this.bookCount.length;  i++)
    {
         if (this.books[i].id === id) {
             this.books[i].isRead = true;
             
             // CHANGE HTML ckbox chked attr to TRUE
           isRead.checked = checked;
           
             break;
            }
    }    
  }

 addBook(id, txtTitle, txtAuthor, isRead) {
   this.books.push(new Book(id, txtTitle, txtAuthor, false)); 
   
   //Create new HTML table row with Title, Author & Read properties
     row = `<tr><td>{txtTitle}</td><td>{txtAuthor}</td><td>{false}</td></tr>`;
   
     //Append the Row to the HTML table
   let table = document.getElementById("table");
   let row = table.insertRow(-1);
   
    //Increment Library BookCount +1  
     this.bookCount++;
  }

    removeBook(id) {
       console.log("I will remove a specific book from the library");
    //Select the table row with Title, Author & Read properties
    //Remove the Row from the table
    //Decrement Library BookCount -1
  }
}