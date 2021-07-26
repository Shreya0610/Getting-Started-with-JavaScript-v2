class Bookshelf {
  constructor() {
    this.favouriteBooks = [];
  }
  addFavouriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favouriteBooks.push(bookName);
    }
  }
  printFavouriteBooks() {
    console.log(`Favourite Books : ${String(this.favouriteBooks.length)}`);
    for (let bookName of this.favouriteBooks) {
      console.log(bookName);
    }
  }
}

function loadBooks(theBookShelf) {
  fakeAjax(BOOK_API, function onBooks(bookNames) {
    for (let bookName of bookNames) {
      theBookShelf.addFavouriteBook(bookName);
    }
    theBookShelf.printFavouriteBooks();
  });
}

var BOOK_API = "https://some.url/api";

var myBooks = new Bookshelf();
loadBooks(myBooks);

function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}
