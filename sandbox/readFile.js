const fsPromises = require('fs').promises;

fsPromises.readFile('./sandbox/testFile.js', 'utf-8')
.then(file => {
    console.log(file);
})
.catch(err => {
    console.log(err);
});

fsPromises.readFile('./README.md', 'utf-8')
.then(file => {
    console.log(file);
})
.catch(err => {
    console.log(err);
});
