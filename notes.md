# Intro to Node.js -- Front End Masters

## GLOBALS in Node.js

- process
- require
- module
- \_\_dirname
- global

## NODE.JS MODULES

TLDR; encapsulated code

what are modules ?

- sharable code
- function wrapped in iffy --> ()
- node does this automatically and gives you Globals

### Modules in Node.js

TLDR; CommonJS

- Node.js uses commonJS for its module system _[ ?? has this changed ??]_

### Creating Modules

TLDR; regular code, just export it

- all Node.js code are modules
- `module.exports = <something>` OR
- `module.exports = {add, something(){}, value: 1}`

### Shipped Modules

TLDR; Node.js ships with a bunch of helpful modules already

- fs
  - fileSystem module used to interact with files on machine
  - examples
    - `fs.readFileSync` >> read a file
    - `fs.appendFileSync` >> add to end
    - `fs.writeFileSync` >> write over (entire) file
- http
  - low-ish level module for creating network based programs (like APIs)
  - we usually interact with something else that interacts with this module
- path
  - useful for manipulating path strings and handling differences across many operating systems
  - examples
    - `path.join()`
    - `path.url()`
    - `path.crypto()`
- ...many more

### Remote Modules

TLDR; download and use other modules from the internet

- strong Node.js community + ability to share _public_ modules has led to a lot of growth
- you can slap together an app really fast using public modules
- 🚧BEWARE 🚧 malicious code is real

## Three Module Types...One Require()

- custom local modules
  - `const local = require('../path/to/<local>')`
- shipped modules
  - `const path = require('path')`
- remote modules
  - `const remote = require('npm_module_name')`
  - remote module with same name as shipped will be used...so never use a lame remote module with a shipped module name(i.e. path, fs, etc.)
