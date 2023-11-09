const fs = require("fs/promises");

function findPet(petName) {
  return fs
    .readFile(`./data/${petName}.json`)
    .then((data) => {
      return JSON.parse(data);
    })
    .catch(() => {
      return `soz couldnt find ${petName} :(`;
    });
}

module.exports = findPet;
