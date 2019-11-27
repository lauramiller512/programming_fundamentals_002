// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  return catalogue.length;
}

function checkBook(book) {
  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i] == book) {
      return true;
    }
  }
  return false;
}

function countBooksByFirstLetter(letter) {
  let numOfBooks = 0;
  for (let i = 0; i < catalogue.length; i++) {
    let b = catalogue[i];
    if (b.startsWith(letter)) {
      numOfBooks++;
    }
  }
  return numOfBooks;
}

function countBooksByKeyword(keyword) {
  let numOfBooks = 0;
  for (let i = 0; i < catalogue.length; i++) {
    let b = catalogue[i];
    if (b.toUpperCase().includes(keyword.toUpperCase())) {
      numOfBooks++;
    }
  } return numOfBooks;
}

function getBooksByAuthor(author) {
  let newArray = [];
  for (let i =0; i < catalogue.length; i++) {
    let book = catalogue[i];
    if (book.includes(author)) {
      newArray.push(book);
  }
} return newArray;
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
}