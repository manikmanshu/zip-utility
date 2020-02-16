const path = require('path');
const getFileName = require('./getFileName');
const fs = require('fs');
const extract = require('extract-zip');
/**
 * 
 * @param {*} source 
 * @param {*} target 
 */
function unzip(source, target) {

    return new Promise((resolve, reject) => {

        let fileName = getFileName(source);

        if (fileName.indexOf('.') > -1) {

            fileName = fileName.split('.').slice(0, -1).join('.');

        }

        const dirPath = path.join(target, fileName);
        if (!fs.existsSync(dirPath)) {

            fs.mkdirSync(dirPath);

        }

        console.log(dirPath);
        extract(source, { dir: dirPath }, function (err) {
            if (err) {

                console.log('err', err);
                return reject(err);

            }
            resolve();
        })
    });

}

module.exports = unzip;