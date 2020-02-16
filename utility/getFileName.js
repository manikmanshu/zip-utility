const path = require('path');
/**
 * 
 * @param {*} url 
 */
function getFileName(url) {

    let fileName = path.basename(url);
    fileName = fileName.split('?')[0];
    return fileName;

}


module.exports = getFileName;