// Constructor 
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = () => `${this.title} was written by ${this.author} in ${this.year}`;

// getAge 
Book.prototype.getAge = () => {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
}

// Revise / Change Year
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revise = true;
}

// Instantiate an Object
const book1 = new Book('1', '2', '3');
const book2 = new Book();

// console.log(book1);
// console.log(book2.getSummary(), "new");
// console.log(book1.getAge(), "new");

book1.revise('2018');
console.log(book1);