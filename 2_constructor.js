// Constructor 
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Instantiate an Object
const book1 = new Book('1', '2', '3');
const book2 = new Book();

console.log(book1);
console.log(book2.getSummary());