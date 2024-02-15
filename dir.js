const fs = require("fs");

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (error) => {
    if (error) throw error;
    console.log("Directory Created");
  });
} else {
  console.log("Directory Already Exists");
}
