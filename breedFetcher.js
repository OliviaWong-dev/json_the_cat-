const args = process.argv;
let breed = args.slice(2);

const request = require("request");
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (error, response, body) => {
    console.log("error", error);
    const data = JSON.parse(body);
    if (data.length > 0) {
      console.log(data);
      console.log(data[0]["description"]);
      console.log("typeof data:", typeof data);
    } else {
      console.log("this breed does not exist!");
    }
  }
);
