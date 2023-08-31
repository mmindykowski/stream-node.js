const fs = require("fs");

let readStream = fs.createReadStream("./data/text.txt");

readStream.on("data", function (chunk) {
  console.log(chunk.toString());
});
