const fs = require("fs");

let readStream = fs.createReadStream("./data/text.txt");

readStream.on("data", function (chunk) {
  console.log(`Wielkość chunka: ${chunk.length / 1024} KB`);

  console.log(chunk);
});
