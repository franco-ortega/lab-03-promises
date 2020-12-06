const { default: fetch } = require('node-fetch');
const { getCharacter, getManyCharacters } = require('./rickAndMortyApi');

jest.mock('node-fetch');

describe('rickAndMortyApi', () => {
    it('takes a character ID and returns the name, status, and species values of the character', async() => {
        fetch.mockResolvedValue({
            json: () => Promise.resolve({
                name: expect.any(String),
                status: expect.any(String),
                species: expect.any(String)
            })
        })
    
        const characterId1 = 1;    
        const characterId2 = 2;

        const result1 = await getCharacter(characterId1);
        const result2 = await getCharacter(characterId2);

        expect(result1).toEqual({ name: "Rick Sanchez", status: "Alive", species: "Human" })
        expect(result2).toEqual({ name: "Morty Smith", status: "Alive", species: "Human" })
    })

    it('takes an array of character IDs and returns a promise with an array of those characters', async() => {
        fetch.mockResolvedValue({
            json: () => Promise.resolve({
                name: expect.any(String),
                status: expect.any(String),
                species: expect.any(String)
            })
        })

        const characterIds = [1, 2]

        const result = await getManyCharacters(characterIds);

        expect(result).toEqual([
            { name: "Rick Sanchez", status: "Alive", species: "Human" },
            { name: "Morty Smith", status: "Alive", species: "Human" }
        ]);
    });
});