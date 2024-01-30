const inquirer = require("inquirer");
const axios = require("axios");

const toTitleCase = (name) => name.slice(0, 1).toUpperCase() + name.slice(1);

inquirer
  .prompt([
    {
      name: "id",
      message: "Which Pokemon id do you want to get?",
      type: "input",
    },
  ])
  .then(({ id }) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
  .then(({ data: { name } }) => console.log(toTitleCase(name)));
