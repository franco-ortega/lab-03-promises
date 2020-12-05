const { rickandMortyApi } = require('./rickAndMortyApi');

describe('rickAndMortyApi', () => {
    it('takes a character ID and returns the name, status, and species values of the character', () => {
        const characterId = 0;
        const characterInfo = rickandMortyApi(characterId);

        expect(characterInfo).toEqual({
            name: 'name',
            status: 'status',
            species: 'species'
        })
    })
})