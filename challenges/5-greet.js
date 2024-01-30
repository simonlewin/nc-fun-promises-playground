const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "greeting",
      message: "What is your name?",
      type: "input",
    },
  ])
  .then(({ greeting }) => console.log(`Hello ${greeting}!`));
