const fsPromises = require('fs').promises;

function copy(src, dst) {

    fsPromises.readFile(src, 'utf-8')
    .then(file => {
        console.log(file)
        fsPromises.writeFile(dst, file)
        .then(() => {
            console.log('file copied')
        })
        .catch(err => {
            console.log(err);
        })
    })
    .catch(err => {
        console.log(err);
    })
}

copy('./happyFile.js', './newHappyFile.js')

module.exports = {
    copy
}