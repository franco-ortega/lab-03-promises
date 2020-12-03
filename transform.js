const fsPromises = require('fs').promises;

function transform(src) {
    return fsPromises.readFile(src, 'utf-8')
    .then(file => {
        console.log(file);
        return file.split('').filter(letter => {
            return letter === letter.toLowerCase()
        })
    })
    .then(file => {
        return file.map(letter => {
            return letter.toUpperCase();
        })
    })
    .then(file => {
        return file.reverse().join('');
    })
    .catch(err => {
        console.log(err);
    })

}

module.exports = {
    transform
}