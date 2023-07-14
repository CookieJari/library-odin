// TODO:
// DELETE BUTTON
// PREVENT MULTIPLES
// READ AND UNREAD DESIGN

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

    const deleteButton = card.querySelector(".delete-item");
    deleteButton.addEventListener("click", deleteBook, false);
    deleteButton.bookItem = myLibrary[i];

    const readSwitch = card.querySelector("#read-switch");
    readSwitch.addEventListener("click", toggleRead, false);
    readSwitch.bookItem = myLibrary[i];
    readSwitch.checked = myLibrary[i].read;
    if (myLibrary[i].read) {
      card.classList.add("book-read");
      card.querySelector(".card-footer").classList.add("book-read");
    }

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

function toggleRead(event) {
  console.log("read");
  event.currentTarget.bookItem.read = !event.currentTarget.bookItem.read;
  console.log(event.currentTarget.bookItem);
  displayBooks();
}

//delete book
function deleteBook(event) {
  console.log("wow");
  console.log(event.currentTarget.bookItem);

  const index = myLibrary.indexOf(event.currentTarget.bookItem);
  myLibrary.splice(index, 1);
  displayBooks();
}

//add book using form
function submitForm(event) {
  form.checkValidity();

  if (form.reportValidity() === true) {
    form.reportValidity();
    const bookTitle = form.querySelector("#book-title").value;
    const author = form.querySelector("#author").value;
    const numberOfPages = form.querySelector("#number-of-pages").value;
    const read = form.querySelector("#read").checked;

    //checks if atleast 1 item has the same title
    if (!myLibrary.some((book) => book.title === bookTitle)) {
      addBookToLibrary(bookTitle, author, numberOfPages, read);
      displayBooks();
    }
  }

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
