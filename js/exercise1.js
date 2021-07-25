//Exercise 1 :

var favouriteBooks = [];

function addFavouriteBook(bookName) {
  if (!bookName.includes("Great")) {
    // includes will bring out every name where "Great" keyword is used.
    favouriteBooks.push(bookName);
  }
}

function printFavouriteBooks() {
  console.log(`Favourite Books : ${favouriteBooks.length}`);
  for (let book of favouriteBooks) {
    console.log(book);
  }
}

addFavouriteBook("A Song of Ice and Fire");
addFavouriteBook("The Great Gatsby");
addFavouriteBook("Crime & Punishment");
addFavouriteBook("Great Expectations");
addFavouriteBook("You Don't Know JS");

printFavouriteBooks();