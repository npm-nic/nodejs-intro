const fs = require("fs"); //  [1]

//  [2]
const lib_file = fs.readFileSync("./lib.js", { encoding: "utf-8" }); 
// console.log(lib_file);
//  [3]
fs.appendFileSync('./lib.js', '\n\n// added by fs.appendFileSync() in [playground.js]')

// [NOTES]
//  [1]
//  👀 no './' on require('<module>')
//  --> tells node we are looking for an internal or (remote) module
//  [2]
//  reading a file
//  --> fs.readFileSync --> returns file as a string
//  [3]
//  write to a file
//  --> fs.appendFileSync --> adds line to end of file
//  --> fs.writeFileSync
 