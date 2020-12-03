const fsPromises = require('fs').promises;

function copy(src, dst) {

    return fsPromises.readFile(src, 'utf-8')
    .then(file => {
        fsPromises.writeFile(dst, file)
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = {
    copy
}