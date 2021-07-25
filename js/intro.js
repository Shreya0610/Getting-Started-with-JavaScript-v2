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

// Coercive Equality: == and ===
var student1 = "Shreya";
var student2 = `${student1}`;

var workshop1 = 16;
var workshop2 = workshop1 + 0;

student1 == student2; //true
student1 === student2; //true

workshop1 == workshop2; //true
workshop1 === workshop2; //true

// functions working and variable calling
var pname = "Shreya";
function change() {
  pname = "Kyle";
  teacher = "XYZ";
  console.log(pname);
  console.log(teacher);
}
console.log(pname);
change();
console.log(teacher);
