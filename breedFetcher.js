const request = require("request");
const breedName = require("./index");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedName}`, function(error,response, body) {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(callback("Breed not found, try again!", null));
      //console.log("Breed not found, try again!");
      
    } else if (data.length > 0) {
      console.log(callback(null, data[0]["breeds"][0].description));
      //console.log(data[0]["breeds"][0].description);
    } else {
      console.log(callback('We appear to be having technical difficulties, please try again later!', null));
      //console.log('We appear to be having technical difficulties, please try again later!');
    }
  });
};

module.exports = fetchBreedDescription;