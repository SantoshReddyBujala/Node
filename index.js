const fsPromise = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromise.readFile(
      path.join(__dirname, "files", "stater.txt"),
      "utf8"
    );
    // await fsPromise.unlink(
    //   path.join(__dirname, "files", "stater.txt")
    // );
    console.log(data);

    await fsPromise.writeFile(
      path.join(__dirname, "files", "newFile.txt"),
      data
    );
    await fsPromise.appendFile(
      path.join(__dirname, "files", "newFile.txt"),
      "\n \n \n Nice Learning Santosh"
    );
    await fsPromise.rename(
      path.join(__dirname, "files", "newFile.txt"),
      path.join(__dirname, "files", "finalFile.txt"),
    );

    const finalData = await fsPromise.readFile(
      path.join(__dirname, "files", "finalFile.txt"),
      "utf8"
    );
    console.log(finalData);
  } catch (error) {
    console.error(error);
  }
};

fileOps();

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "I am replying back to you...",
//   (error) => {
//     if (error) throw error;
//     console.log("Write Completed");

//     fs.appendFile(
//         path.join(__dirname, "files", "reply.txt"),
//         "\n \n I am appending text...",
//         (error) => {
//           if (error) throw error;
//           console.log("Append Completed");

//           fs.rename(
//             path.join(__dirname, "files", "reply.txt"),
//             path.join(__dirname, "files", "newReply.txt"),
//             (error) => {
//               if (error) throw error;
//               console.log("Rename Completed");
//             }
//           );
//         }
//       );
//   }
// );

process.on("uncaughtException", (error) => {
  console.log(`There is a Uncaught error: ${error}`);
  process.exit(1);
});
