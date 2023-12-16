const fs = require("fs");

const format = async (path) => {
  try {
    const contents = fs.readFileSync(path, "utf-8");
    const filteredContents = contents.replace(/\s+/g, " ");
    fs.writeFileSync("newText.txt", filteredContents, (err) => {
      if (err) console.log("error in writing to file");
    });
  } catch (error) {
    console.log("generic error");
  }
};
format("./data.txt");
