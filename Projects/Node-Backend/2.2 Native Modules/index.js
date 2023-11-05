const fs = require("fs");
// fs.writeFile(
//   "NodeTextFile.txt",
//   "File created via inbuilt node module file system(fs) by methods writeFile, which takes filename first, 2nd data, callback functohandle error ",
//   (err) => {
//     if (err) throw err;
//     else console.log("file created");
//   }
// );

fs.readFile("NodeTextFile.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
