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

### Local Modules

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
- 🚧BEWARE 🚧
  - malicious code is real
  - one person can shut it DOWN (h/t jon taffer)
    - <https://www.theregister.com/2016/03/23/npm_left_pad_chaos/>

### Three Module Types...One Require()

- custom local modules
  - `const local = require('../path/to/<local>')`
- shipped modules
  - `const path = require('path')`
- remote modules
  - `const remote = require('npm_module_name')`
  - remote module with same name as shipped will be used...so never use a lame remote module with a shipped module name(i.e. path, fs, etc.)

## Async Code

TLDR; Node.js is single threaded + async like the browser

- Node.js is single threaded and event based ... just like the browser
- unlike the browser, your Node.js app will be shared by _all_ clients
- 🤔CONSIDER 🤔
  - CPU intensive tasks block the single thread
  - ...while loops

### Async Patterns in Node.js

TLDR; async / await is legit

- callback pattern

  ```javascript
  do_async_thing((error, result) => {});
  ```

  - adopted pattern in community
  - _yesterday's_ news...Scott Moss never uses callbacks

- promises

  ```javascript
  do_async_thing()
    .then((result) => {})
    .catch((error) => {});
  ```

  - gives you more command of the flow
    - you have control over of when promise gets resolved
    - _opposed_ to being notified after something fails
  - prettier version of a callback

- async / await

  ```javascript
  const run = async () => {
    const results = await do_async_thing(); // [1]
    console.log(results);
  };
  //  [1] must return a promise
  ```

  - takes asynchronous code and makes it synchronous
  - stuck on line until resolves the promise
  - 🚧PROBLEM 🚧
    - error breaks up whole application
    - need a new error handling pattern
      - try{} catch{}
      - async always return array[]
        - array[0] = error
        - array[1] = results
      - Scott Moss prefers the [] method

## Server

TLDR; one server handling all requests from client

- serving data to many different types of clients
  - browser
  - mobile app
  - another server
- one server instance will handle many client requests
  - compared to a client application which only cares about itself on the host machine
- Node.js has built in & community packages to help build all kinds of servers
  - API's
  - Static
  - Realtime
