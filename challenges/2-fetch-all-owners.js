const request = require("../utils/request");

const fetchAllOwners = () =>
  request("/owners").then((owners) =>
    owners.map((owner) => owner.toLowerCase())
  );

module.exports = fetchAllOwners;
