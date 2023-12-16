const fs = require("fs");

const reader = async (path) => {
  try {
    const contents = await fs.readFileSync(path, "utf-8");

    //expensive operation
    let count = 1;
    for (let index = 0; index < 10000000000; index++) {
      count = count + index;
    }
    console.log(contents);
  } catch (error) {
    console.log("Error");
  }
};

reader("./data.txt");
