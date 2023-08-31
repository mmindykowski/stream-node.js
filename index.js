const fs = require("fs");

let readStream = fs.createReadStream("./data/text.txt", {
  highWaterMark: 16 * 1024,
});

readStream.on("data", function (chunk) {
  console.log(`Wielkość chunka: ${chunk.length / 1024} KB`);

  console.log(chunk);
});

readStream.on("end", function () {
  console.log("Zakonczony stream");
});
