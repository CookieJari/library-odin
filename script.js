let myLibrary = [];

const cardContainer = document.querySelector(".display-container");
const cardTemplate = document.querySelector(".card");

const form = document.querySelector("form");
const submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", submitForm, false);

//constructor of book object
function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

function addBookToLibrary(title, author, numberOfPages, read) {
  myLibrary.push(new Book(title, author, numberOfPages, read));
}

function displayBooks() {
  cardContainer.innerHTML = "";
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
  }
}

//add book using form
function submitForm(event) {
  const bookTitle = form.querySelector("#book-title").value;
  const author = form.querySelector("#author").value;
  const numberOfPages = form.querySelector("#number-of-pages").value;
  const read = form.querySelector("#read").checked;

  addBookToLibrary(bookTitle, author, numberOfPages, read);
  displayBooks();
  event.preventDefault();
}

//adding two random books
addBookToLibrary("Whimpy Kid", "Jeff Kinney", 32, true);
addBookToLibrary(
  "Neal Lerios: a life of a kid in missouri",
  "Neal Lerios",
  435,
  false
);
displayBooks();
cardTemplate.remove();
