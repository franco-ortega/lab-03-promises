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

module.exports = {
    getCharacter
}

// return fetch(`${URL}${characterId}`)
    // .then(response => response.json())
    // .then(results => {        
        // return {
        //     name: results.name,
        //     status: results.status,
        //     species: results.species
    //     }
    // })
