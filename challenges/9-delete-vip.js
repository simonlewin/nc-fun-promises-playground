const fs = require("fs/promises");
const inquirer = require("inquirer");

const file = fs.readFile("./vip-list.txt", "utf8").then((data) => data);

const name = inquirer
  .prompt([
    {
      name: "name",
      message: "Which VIP would you like to remove?",
      type: "input",
    },
  ])
  .then(({ name }) => name);

Promise.all([file, name]).then(([file, name]) => {
  const newFile = file
    .split("\n")
    .filter((n) => n !== name)
    .join("\n");

  fs.writeFile("./vip-list.txt", newFile).then(() => {
    console.log(`${name} was successfully deleted!`);
  });
});
