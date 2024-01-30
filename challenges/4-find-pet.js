const fs = require("fs/promises");

const findPet = (name) =>
  fs
    .readFile(`./data/${name}.json`, "utf8")
    .then((data) => JSON.parse(data))
    .catch((error) => `soz couldnt find ${name} :(`);

module.exports = findPet;
