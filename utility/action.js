const getFileName = require('./getFileName');
const download = require('./download');
const unzip = require('./unzip');
const path = require('path');

/**
 * 
 * @param {*} url 
 * @param {*} target 
 */
async function action(url, target) {

    const fileName = getFileName(url);

    try {

        console.log('Downloading started');
        await download(url, target);

        console.log('extracting data');
        await unzip(path.join(target, fileName), target);
        console.log('all done');

    } catch (err) {

        if (err) {

            console.log(err);

        }

        console.log('failed');

    }
}

module.exports = action;
