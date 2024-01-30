const fs = require("fs/promises");

const string1 = fs.readFile("./secret-message.txt", "utf8");
const string2 = fs.readFile("./super-secret-message.txt", "utf8");

Promise.all([string1, string2]).then(([str1, str2]) => {
  const fileName =
    str1.length > str2.length
      ? "secret-message.txt"
      : "super-secret-message.txt";

  const lengthDifference = Math.abs(str1.length - str2.length);

  console.log(`${fileName}`, lengthDifference);

  fs.writeFile("./mega-secret-message.txt", str1 + "\n" + str2);
});
