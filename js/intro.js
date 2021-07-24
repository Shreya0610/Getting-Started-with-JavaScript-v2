//creating variables
var myName = "Shreya";
var gitHubHandle = "Shreya0610";
var age = 18;

// function declaration
function whoAmI(name, nickname, Age) {
  console.log(`
    Hi, I'm ${name} (aka ${nickname}), 
    and I'm ${Age} years old.
    `);
}
// function calling
whoAmI(myName, gitHubHandle, age);

// operator use
console.log(myName + age);

// Array and its calling
var friends = ["Ekta", "Shivani", "Rai"];
console.log(friends.length);
console.log(friends[0]);

//Exercise 1 :

var favouriteBooks = [];

function addFavouriteBook(bookName) {
  if (!bookName.includes("Great")) { // includes will bring out every name where "Great" keyword is used.
    favouriteBooks.push(bookName);
  }
}

function printFavouriteBooks() {
  console.log(
    `Favourite Books : ${favouriteBooks.length}`
  )
  for(let book of favouriteBooks){
    console.log(book);
  }
}

addFavouriteBook("A Song of Ice and Fire");
addFavouriteBook("The Great Gatsby");
addFavouriteBook("Crime & Punishment");
addFavouriteBook("Great Expectations");
addFavouriteBook("You Don't Know JS");

printFavouriteBooks();

// Coercive Equality: == and ===
var student1 = "Shreya";
var student2 = `${student1}`;

var workshop1 = 16;
var workshop2 = workshop1 + 0;

student1 == student2; //true
student1 === student2; //true

workshop1 == workshop2;  //true
workshop1 === workshop2;  //true