const { getCharacter } = require('./rickAndMortyApi');

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

        const result1 = await getCharacter(characterId1);
        const result2 = await getCharacter(characterId2);

        expect(result1).toEqual(expected1)
        expect(result2).toEqual(expected2)
    })

    it('takes an array of character IDs and returns a promise with an array of those characters', async() => {
    
        const characterIds = [1, 2]
        const expected = [
            {
                name: "Rick Sanchez",
                status: "Alive",
                species: "Human"
            },
            {
                name: "Morty Smith",
                status: "Alive",
                species: "Human"
            }
        ];

        const result = await getManyCharacters(characterIds);
        

        expect(result).toEqual(expected)
        
    })




})