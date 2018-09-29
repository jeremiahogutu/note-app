console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

// console.log(_.isString(true));
// console.log(_.isString('Jeremiah'));

let filteredArray = _.uniq(['Jeremiah', 1, 'Jeremiah', 1, 2, 3, 4, 5]);
console.log(filteredArray);
// console.log('Result:', notes.add(3, 2));
// let user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);