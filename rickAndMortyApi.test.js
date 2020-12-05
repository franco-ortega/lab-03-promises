const { rickandMortyApi } = require('./rickAndMortyApi');

describe('rickAndMortyApi', () => {
    const expected = {
        name: "Morty Smith",
        status: "Alive",
        species: "Human"
    }
    it('takes a character ID and returns the name, status, and species values of the character', async() => {
        // const characterId = 2;
        // const characterInfo = rickandMortyApi(characterId);
        const result = await rickandMortyApi(2);

        expect(result).toEqual(expected)
    })
})