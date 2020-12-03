//const fsPromises = require('fs').promises;
const { transform } = require('./transform');

describe('transform', () => {
    it('read a file, remove all the capital letters, capitalize all the remaining letters, reverse the string', () => {

        return transform('./capital.md')
        .then(newFile => {
            expect(newFile).toEqual('.ERE EVI SRETTE LATIPA')

        })
    })
});

