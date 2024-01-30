const fs = require("fs/promises");
const inquirer = require("inquirer");
const axios = require("axios");

inquirer
  .prompt([
    {
      name: "author",
      message: "Which author?",
      type: "input",
    },
    {
      name: "book",
      message: "Which book?",
      type: "input",
    },
  ])
  .then(({ author, book }) => {
    // author = "McEvoy";
    // book = "Flowers";

    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${book}+inauthor:${author}`
    );
  })
  .then(({ data }) => {
    const volumeInfo = data.items[0].volumeInfo;

    const bookTitle = volumeInfo.title.toLowerCase().split(" ").join("-");
    const author = volumeInfo.authors[0].toLowerCase().split(" ").join("-");

    fs.writeFile(`${author}-${bookTitle}.txt`, JSON.stringify(volumeInfo));
  })
  .then(() => console.log("Book details saved!"));
