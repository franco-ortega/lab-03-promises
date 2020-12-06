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
    
    let array = []
    
    const response = await characterIds.map(async(id) => {
    const result = await getCharacter(id);
    return result;
    })

    //TO LOOP:
    //I want to take each item out of the RESPONSE
    //I want to set each item equal to a const that awaits
    //I want to put that const in ARRAY

    for(let i = 0; i < response.length; i++) {
        const item = response[i]

        const awaitedItem = await item;

        array.push(awaitedItem);
    }

    return array;


    // const [ ...results ] = await response;
    // // const uno = await one
    // // const duo = await two
    // array = results;
    // return array;

    
    // const [ one, two ] = response;
    // const uno = await one
    // const duo = await two
    // array = [uno, duo]
    // return array;

    


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
