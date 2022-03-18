const request = require("request");

request(`https://api.thecatapi.com/v1/images/search?breed_ids=${process.argv[2].toLowerCase().slice(0,4)}`, function(error,response, body) {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed not found, try again!");
  } else if (data.length > 0) {
    console.log(data[0]["breeds"][0].description);
  } else {
    console.log('We appear to be having technical difficulties, please try again later!');
  }
});
