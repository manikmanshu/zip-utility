const action = require('./utility/action');


/**
 
Usage

const path = require('path');

const url = 'https://file-examples.com/wp-content/uploads/2017/02/zip_9MB.zip?aa=1&b=2';
const target = path.join(__dirname, 'data');

action(url, target);
*/
module.exports = action;