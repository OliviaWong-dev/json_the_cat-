const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        return callback(error, null);
      }
      const data = JSON.parse(body);
      if (data.length > 0) {
        let desc = "";
        desc = data[0]["description"];
        return callback(null, desc);
      } else {
        return callback(null, "this breed does not exist!");
      }
    }
  );
};

module.exports = { fetchBreedDescription };

// const breed = process.argv.slice(2);

// const request = require("request");
// request(
//   `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
//   (error, response, body) => {
//     console.log("error", error);
//     const data = JSON.parse(body);
//     if (data.length > 0) {
//       console.log(data);
//       console.log(data[0]["description"]);
//       console.log("typeof data:", typeof data);
//     } else {
//       console.log("this breed does not exist!");
//     }
//   }
// );
