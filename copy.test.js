const fsPromises = require('fs').promises;
const { copy } = require('./copy');

describe('copy', () => {
    it('copy the data from a file and create a new file with the copied data', () => {

        return copy('./happyFile.js', './newerHappyFile.js')
        .then(() => {

            return fsPromises.readFile('./newerHappyFile.js', 'utf-8')
        })
        .then(newFile => {
            expect(newFile).toEqual('Happy!')

        })
    })
})