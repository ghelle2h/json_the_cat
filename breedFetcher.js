const request = require("request");

const  printBreedDescription  = (description) => {
  console.log(description);
};
const breedName = process.argv[2];
const fetchBreed = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(`Failed: ${error}`);
      return;
    }
    
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(body)
    const breed = data[0];
    if (breed) {
      callback(breed.description);
    } else {
      callback(`Failed: ${breedName} not found`);
    }
  
  });

};

fetchBreed(breedName, printBreedDescription);


