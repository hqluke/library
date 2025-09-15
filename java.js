const myLibrary = [];




function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function(){
        let isRead;
        if(this.read == true){
            isRead = "This book has been read";
        }
        else{
            isRead = "This book has not been read";
        }
        return infoString = `${this.title} by ${this.author}, ${pages} pages. ${isRead}`
        
    };
}

function addBookToLibrary(bookToAdd){
  myLibrary.push(bookToAdd)
}

const container = document.querySelector(".book-container");
const newButton = document.querySelector(".new");
const formDiv = document.querySelector(".form");
const form = document.querySelector("form");

newButton.addEventListener('click', function(){
  formDiv.style.display = "flex";
});

form.addEventListener('submit', (event)=>{
  event.preventDefault();

  const title = document.querySelector("#book").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;

  
  const readValue = document.querySelector('input[name="read"]:checked').value;
  const read = readValue === "true";

  
  const newBook = new Book(title, author, pages, read);

  
  addBookToLibrary(newBook);

  container.innerHTML = ""; 

  displayLibrary();

  
  form.reset();
  formDiv.style.display = "none";
});

function displayLibrary(){
  for (let i = 0; i < myLibrary.length; i++){
    let div = document.createElement("div");
    div.classList.add("bookList")
    div.classList.add(myLibrary[i].id)
    container.appendChild(div);
    let para = document.createElement("p");
    para.textContent = myLibrary[i].info();
    div.appendChild(para);
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("Remove");
    div.appendChild(removeButton);
    const toggleRead = document.createElement("button");
    toggleRead.classList.add("Toggle");
    toggleRead.textContent = "Toggle Read";
    div.appendChild(toggleRead);

    removeButton.addEventListener("click", () => {
    myLibrary.splice(i, 1);

    container.innerHTML = ""; 
    displayLibrary();
  });

    toggleRead.addEventListener("click", () => {
    if(myLibrary[i].read == true){
      myLibrary[i].read = false;
    }
    else{
      myLibrary[i].read = true;
    };

    container.innerHTML = ""; 
    displayLibrary();
  });
  }
}




  const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
  const book2 = new Book("The Inner Game Of Tennis", "W. Timothy Gallwey", 122, true);
  const book3 = new Book("The Secret", "Rhonda Byrne", 198, true);
    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);
    console.log(myLibrary);
    displayLibrary();

