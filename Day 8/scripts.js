// a) Write a constructor for the class movie
/*class Movie {
  constructor() {
    this.title = "Tangled";
    this.studio = "Disney";
    this.rating = "PG";
  }
}
console.log(new Movie());
*/

// The construtor for the movie will set the class property rating to "PG" as default when no rating is provided

/*class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = "PG";
  }
}
console.log(new Movie("Tangled", "Disney"));
*/

// getPG method
/*
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG() {
    return this.rating;
  }
}
var s1 = new Movie("Tangled", "Disney", "PG");
let rat = s1.getPG();
console.log(rat);
*/

// Instances of class
/*
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
console.log(new Movie("Casino Royale", "Eon Prduction", "PG13"));
*/
// Write a "person" class to hold all the details.
/*
class Person {
  constructor() {
    this.firstname = "Alice";
    this.lastname = "Bob";
    this.dob = "June 10";
    this.address = "xxx";
  }
}
console.log(new Person());
*/
