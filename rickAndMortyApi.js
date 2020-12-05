const fetch = require('node-fetch');

const URL = 'https://rickandmortyapi.com/api/character/';

function rickandMortyApi(characterId) {
    
    return fetch(`${URL}${characterId}`)
    .then(response => response.json())
    .then(results => {        
        return {
            name: results.name,
            status: results.status,
            species: results.species
        }
    })
}

module.exports = {
    rickandMortyApi
}
