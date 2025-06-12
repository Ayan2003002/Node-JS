const file = require("fs"); // fs modual

// Sync ----------- Blocking Request
console.log(1);
const requestSysn = file.readFileSync("./test.txt", "utf-8");
console.log(requestSysn);
console.log(2);



// Async --------------- Non Blocking Request
console.log('12');
file.readFile("testasync.txt", "utf-8", (err, result) => {
  console.log(result);
});
console.log('4');
