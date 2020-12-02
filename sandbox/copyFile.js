const fsPromises = require('fs').promises;

fsPromises.readFile('./sandbox/testFile.js', 'utf-8')
.then(fileData => {

    console.log(fileData);
    
    fsPromises.writeFile('./sandbox/copiedFile.js', fileData)
    .then(() => {
    console.log('copied!');
    })
    .catch(err => {
        console.log(err);
    });
    
})
.catch(err => {
    console.log(err);
});
