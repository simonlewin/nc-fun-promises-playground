const axios = require("axios");

axios
  .get("https://pokeapi.co/api/v2/pokemon")
  .then((response) =>
    response.data.results.map(({ name }) => console.log(name))
  );
