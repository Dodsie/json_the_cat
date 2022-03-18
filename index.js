const fetchBreedDescription = require('./breedFetcher');
const breedName = process.argv[2].toLowerCase().slice(0,4);

// const fetchBreedDescription = (breedName) => {
//   console.log(breedName);
// };

// console.log
// console.log('hello');
let errorCount = 0;
let descriptionCount = 0;
fetchBreedDescription(breedName, (error,description) => {
  if (error) {
    return error;
  } else {
    return description;
  }
  
});

module.exports = {fetchBreedDescription};
