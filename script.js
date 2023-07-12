let myLibrary = [];

const cardContainer = document.querySelector(".display-container");
const cardTemplate = document.querySelector(".card");

function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  console.log(cardContainer);
  for (let i = 0; i < myLibrary.length; i++) {
    //clone the card template
    const card = cardTemplate.cloneNode(true);
    //title
    const cardTitle = (card.querySelector(".title h2").innerText =
      myLibrary[i].title);

    //author
    const cardAuthor = (card.querySelector(".author span").innerText =
      myLibrary[i].author);

    //number of pages
    const cardPages = (card.querySelector(".pages span").innerText =
      myLibrary[i].numberOfPages);
    cardContainer.appendChild(card);
    console.log(myLibrary[i]);
  }
}
const book1 = new Book("Whimpy Kid", "Jeff Kinney", 32, true);
const book2 = new Book(
  "Neal Lerios: a life of a kid in missouri",
  "Neal Lerios",
  435,
  false
);
addBookToLibrary(book1);
addBookToLibrary(book2);
displayBooks();
cardTemplate.remove();
