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

const getManyCharacters = (characterIds) => {
    return Promise.all(characterIds.map(id => getCharacter(id)));
    }

module.exports = {
    getCharacter,
    getManyCharacters
}






    // const response = await fetch(`${URL}${characterId}`)
    // const results = await response.json();
    // const info = {
    //     name: results.name,
    //     status: results.status,
    //     species: results.species
    // }
    // return info;

// return fetch(`${URL}${characterId}`)
    // .then(response => response.json())
    // .then(results => {        
        // return {
        //     name: results.name,
        //     status: results.status,
        //     species: results.species
    //     }
    // })
