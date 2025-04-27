/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit",
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender",
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place",
];

function chooseRandomGenre() {
  let genres = ["drama", "fantasy", "comedy"];
  let randomIndex = getRandomNumber(0, genres.length - 1);
  return genres[randomIndex];
}

function displayRandomShow(genre) {
  if (genre === "random") {
    genre = chooseRandomGenre();
  }

  let selectedShow;

  if (genre === "drama") {
    selectedShow = dramaShows[getRandomNumber(0, dramaShows.length - 1)];
  } else if (genre === "fantasy") {
    selectedShow = fantasyShows[getRandomNumber(0, fantasyShows.length - 1)];
  } else if (genre === "comedy") {
    selectedShow = comedyShows[getRandomNumber(0, comedyShows.length - 1)];
  }

  if (selectedShow) {
    displayShow(selectedShow);
  }
}
