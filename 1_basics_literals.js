const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: '2015',
  getSummary: function() {
    return `${this.title} was originally written by ${this.author} in ${this.year}`;
  }
};

console.log(book1.getSummary());
console.log(Object.keys(book1));