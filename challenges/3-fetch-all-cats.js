const fetchCatsByOwner = require("./1-fetch-cats-by-owner");
const fetchAllOwners = require("./2-fetch-all-owners");

const fetchAllCats = () => {
  return fetchAllOwners().then((owners) => {
    return Promise.all(owners.map(fetchCatsByOwner)).then((result) =>
      result.flat().sort()
    );
  });
};

module.exports = fetchAllCats;
