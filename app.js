class Book {
  constructor(id,  title, author, isRead) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isRead = false;
    }
}

class Library {
  constructor(bookCount, books) {
    this.bookCount = 0;
    this.books = [];
  }

  markRead(id) {
    for (let i = 0; i < this.bookCount.length; i++) {
      if (this.books[i].id === id) {
        this.books[i].isRead = true;
             
        // CHANGE HTML ckbox chked attr to TRUE
        isRead.checked = checked;
           
        break;
      }
    }
  }

  addBook(txtTitle, txtAuthor, isRead) {
    this.books.push(new Book(txtTitle, txtAuthor, isRead));
   
    let tr = document.createElement("tr");
    let titleTD = document.createElement("td");
    titleTD.textContent = txtTitle;
    let authorTD = document.createElement("td");
    authorTD.textContent = txtAuthor;
    let isReadTD = document.createElement("td");
    isReadTD.type = "checkbox";

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = isRead;

    isReadTD.append(checkBox);
    tr.append(titleTD);
    tr.append(authorTD);
    tr.append(isReadTD);

    let table = document.getElementById("table");

    table.append(tr);

   
    //Increment Library BookCount +1  
    this.bookCount++;
  }


}

let library = new Library(0, []);
function addBook(txtTitle, txtAuthor, isRead){
  library.addBook(txtTitle, txtAuthor, isRead);
};