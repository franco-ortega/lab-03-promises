const fetch = require('node-fetch');

const fetchRickAndMOrty = fetch('https://rickandmortyapi.com/api/character/')
.then(response => {
    return response.json();
})

const fetchOrigins = fetch('https://rickandmortyapi.com/api/character/')
.then(response => {
    const options = response.json();

    const blah = options['info'];

    return blah;

})

Promise.all(([fetchRickAndMOrty, fetchOrigins]))
.then(([one, two]) => {
    console.log(one, 'line breeeeeeeeeak', two);
})



// Promise.all([
//     fetch('https://rickandmortyapi.com/api/character/')
// ])
// .then(([responseRickAndMorty]) => {
//     const object = responseRickAndMorty.json();
//     return object;

//     //return responseRickAndMorty.json();
// })
// .then(json => {
//     console.log(json);
// });

