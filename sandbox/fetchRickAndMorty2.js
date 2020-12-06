const fetch = require('node-fetch');

fetch('https://rickandmortyapi.com/api/character/')
.then(response => {
    return response.json();
})
.then(({ results }) => {
    //console.log(results[0]);
    return results.map(item => item.origin);
    //return results[0].origin
})
.then(origin => {
    return origin.map(item => item.url)
})
.then(urlForOrigin => {
    return urlForOrigin.filter(url => url)
})
.then(urlToFetchOrigin => {
    //return url.json();
    console.log('URLs to fetch Origin data');
    console.log(urlToFetchOrigin);
    return Promise.all(urlToFetchOrigin.map(url => fetch(url)));
})
.then(response => {
    console.log(response);
    return response.map(item => item.json());
})
.then(originData => {
    console.log(originData);
    //return response.json();
})





// const fetchOrigins = fetch('https://rickandmortyapi.com/api/character/')
// .then(response => {
//     return response.json();
// })
// .then(({ results }) => {
//     console.log(results[0]);
// })


// Promise.all(([fetchRickAndMOrty, fetchOrigins]))
// .then(([one, two]) => {
//     console.log(one, 'line breeeeeeeeeak', two);
// })



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

