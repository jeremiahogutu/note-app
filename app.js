console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

console.log('Result:', notes.add(3, 2));
// let user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);