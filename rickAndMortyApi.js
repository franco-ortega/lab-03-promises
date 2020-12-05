const fetch = require('node-fetch');

function rickandMortyApi(characterId) {
    
    return fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    .then(response => {
        return response.json();
    })
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
