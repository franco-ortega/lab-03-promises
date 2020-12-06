const fetch = require('node-fetch');

const URL = 'https://rickandmortyapi.com/api/character/';

const getCharacter = async(characterId) => {
    const response = await fetch(`${URL}${characterId}`)
    const results = await response.json();
    const info = {
        name: results.name,
        status: results.status,
        species: results.species
    }
    return info;
}

const getManyCharacters = async(characterIds) => {
    let characters = []

    const response = await characterIds.map(async(id) => await getCharacter(id));

    for(let i = 0; i < response.length; i++) {
        const character = response[i]
        const awaitedCharacter = await character;
        characters.push(awaitedCharacter);
    }

    return characters;
}

module.exports = {
    getCharacter,
    getManyCharacters
}