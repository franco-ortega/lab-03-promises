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
    
    const [ one, response ] = await characterIds.map(async(id) => {
    const result = await getCharacter(id);
    return result;
    })

    let array = []
    
    const uno = await one
    const duo = await response

    array = [uno, duo]
    
    
    return array;

    


    // const [response] = await characterIds.map( async id => await getCharacter(id));
    // return response;





    // return Promise.all(characterIds.map(id => getCharacter(id)));
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
