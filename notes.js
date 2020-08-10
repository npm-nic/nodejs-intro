console.log("hello from notes");

// // --> GLOBALS <-- // //
//  - process
//  - require
//  - module
//  - __dirname
//  - global
// console.log(process)
// console.log(global)
// console.log(module)

// // --> MODULES <-- // //
//  TLDR; encapsulated code
//  what are modules ?
//  --> function wrapped in iffy --> ()
//  --> node does this automatically and gives you Globals

//  Modules in Node.js
//  TLDR; CommonJS
//  --> Node.js uses commonJS for its module system
//        [ ?? has this changed ??]
//  --> other module systems out there...
//      - ESM (ecmascript modules) *new standard (ES6)
//      - AMD --> pretty much dead
//      - ...others, that don't matter

//  Creating Modules
//  TLDR; regular code, just export it
//  --> all nodejs code are modules
//  --> ```module.exports = <something>```  OR
//  --> ```module.exports = {add, something(){}, value: 1} ```
