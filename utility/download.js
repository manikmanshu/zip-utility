const request = require('request');
const fs = require('fs');
const path = require('path');
const getFileName = require('./getFileName');

/**
 * 
 * @param {*} url 
 * @param {*} target 
 */
function download(url, target) {

    return new Promise((resolve, reject) => {
        const filename = getFileName(url);

        request
            .get(url)
            .on('response', (res) => {
                if (res.statusCode === 200) {
                    try {

                        const filePath = path.join(target, filename);
                        const dest = fs.createWriteStream(filePath);
                        dest.on('error', (err) => {
                            // handle write error
                            console.log(err);
                            reject(err);

                        });
                        dest.on('finish', () => {

                            console.log(`The file is finished downloading. Downloaded at ${filePath}`);
                            resolve();

                        });

                        res.pipe(dest);

                    } catch (e) {
                        // Handle request errors
                        console.log(e);
                        reject(e);
                    }
                }
                else {
                    // Handle HTTP server errors
                    console.log(res.statusCode);

                    // console.log('headers', JSON.stringify(res.headers));

                    reject({ message: `Received ${res.statusCode}` });
                }
            })
            .on('error', (error) => {

                reject(error);

            });

    });

}


module.exports = download;