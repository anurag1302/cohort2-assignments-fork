const fs = require("fs");

const date = new Date();
const text =
  "The quick brown fox jumps over the lazy dog - timestamp: " +
  date.toUTCString();

fs.writeFile("write.txt", text, (err) => {
  if (err) throw err;
});
