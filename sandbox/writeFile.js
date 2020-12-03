const fsPromises = require('fs').promises;

fsPromises.writeFile('./sandbox/newFile.js', '"A newly written file."')
.then(() => {
    console.log('done!');
})
.catch(err => {
    console.log(err);
});
