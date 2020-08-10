const value = 2;
const userIDs = [1, 4, 6];
const action = () => console.log("action");
const private = 'you cant see me' //  [2]

module.exports = {
  value,
  action,
  userIDs,
  // // [1]
  // value: 1,
  // userIDs: [1, 2, 5],
  // action() {
  //   console.log("'action' said action() in lib.js");
  // },
};

// [NOTES]
//  [1]
//  BAD_CODE_ALERT
//  --> we can assign new values in modules.exports
//  [2]
//  not exported so not available
//  --> see app.js