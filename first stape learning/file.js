const file = require("fs"); // fs is file system library

// File Create
// ==========================

// Sync ----------------
//  file.writeFileSync("./test.txt", "this is test");

// Async
// file.writeFile("./testasync.txt","this is test in Async",(err)=>{});

// File Read
// =============================

// Sync ----------------
const result = file.readFileSync("./testasync.txt", "utf-8");
console.log(result + " this is for Sync");

// Async -----------------

file.readFile("./testasync.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log(result + "  this is for Async");
  }
});


// appand function ---------------

// file.appendFileSync("./testasync.txt", new Date().getDate().toLocaleString());

file.appendFileSync("./testasync.txt", "HAY THERE\n");

// file.cpSync("./testasync.txt","./copy.txt");  // ===> file copy 

// file.unlinkSync("./copy.txt");       // ===> file delete 


console.log(file.statSync("./testasync.txt").isFile());


// folder Create =========
file.mkdirSync("my-folder");

// folder Create recursive create function  =========
file.mkdirSync("my-folders/a/b", { recursive : true });
