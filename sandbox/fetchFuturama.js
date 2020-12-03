const fetch = require('node-fetch');

fetch('http://futuramaapi.herokuapp.com/api/characters/bender')
.then(res => {
    return res.json();
})
.then(json => {
    console.log(json);
});

