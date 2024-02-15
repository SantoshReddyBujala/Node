const fs = require("fs");

const rs = fs.createReadStream("./files/learn.txt", { encoding: "utf-8" });

const ws = fs.createWriteStream("./files/new-learn.txt");

// rs.on("data", (dataChenk) => {
//   ws.write(dataChenk);
// });

rs.pipe(ws);
