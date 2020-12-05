const { rickandMortyApi } = require('./rickAndMortyApi');

describe('rickAndMortyApi', () => {
    it('takes a character ID and returns the name, status, and species values of the character', async() => {

        const characterId1 = 1;
        const expected1 = {
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human"
        }

        const characterId2 = 2;
        const expected2 = {
            name: "Morty Smith",
            status: "Alive",
            species: "Human"
        }

        const result1 = await rickandMortyApi(characterId1);
        const result2 = await rickandMortyApi(characterId2);

        expect(result1).toEqual(expected1)
        expect(result2).toEqual(expected2)
    })
})