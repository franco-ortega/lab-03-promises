const fsPromises = require('fs').promises;

function transform(src) {
    return fsPromises.readFile(src, 'utf-8')
    .then(file => {
        for(let i = 0; i < file.length; i++) {
            const letter = file[i];

            if(letter === letter.toUpperCase()) {
                //letters.push(letter);
                file = file.replace(letter, ' ')
            }
        }
        return file;
    })
    .then(file => {
        const upperCaseLetters = file.toUpperCase();
        console.log(upperCaseLetters);
        return upperCaseLetters;
    })
    .catch(err => {
        console.log(err);
    })
    
    
    

}

transform('./capital.md');

module.exports = {
    transform
}