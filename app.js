// [1]
const lib = require("./lib");
const { action } = require("./lib");

console.log(`userIDs: ${lib.userIDs}`);
console.log(lib.private); //  [2]
action();

// [NOTES]
//  [1]
//  to require modules that you created:
//  --> '../relative/path/to/<file>'
//  --> files YOU created in same repo
//  --> there are 2 other types of modules we require
//  [2]
//  see 'private' const in [lib.js]
//  --> undefined

////////////////////////////////// 
//  to run this app             //
//  [terminal] >> [root_folder] //
//  node app.js                 //
////////////////////////////////// 

