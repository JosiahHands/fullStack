class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(val) {
    this._isCheckedOut = val;
  }
  getAverageRating() {
    let sum = this.ratings.reduce((accum, rating) =>
      accum + rating);
      return (sum / this.ratings.length).toFixed(1);
  }
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }
  addRating(num) {
    this.ratings.push(num);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    this._author = author;
  }
  get pages() {
    this._pages = pages;
  }
}
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    this._director = director;
  }
  get runTime() {
    this._runTime = runTime;
  }
}
class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    this._artist = artist;
  }
  get songs() {
    this._songs = songs;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())

const speed = new Movie('jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating());

const elvis = new CD('Elvis Presley', 'first record', 2);
elvis.toggleCheckOutStatus();
console.log(elvis.isCheckedOut)
elvis.addRating(5)
elvis.addRating(5)
elvis.addRating(5)
console.log(elvis.getAverageRating());
