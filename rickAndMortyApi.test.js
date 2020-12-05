const { rickandMortyApi } = require('./rickAndMortyApi');

describe('rickAndMortyApi', () => {
    it('takes a character ID and returns the name, status, and species values of the character', async() => {
        const characterId = 2;
        const expected = {
            name: "Morty Smith",
            status: "Alive",
            species: "Human"
        }

        const result = await rickandMortyApi(characterId);

        expect(result).toEqual(expected)
    })
})