const axios = require("axios");

axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
  const results = response.data.results;
  results.map((result) => console.log(result.name));
});
