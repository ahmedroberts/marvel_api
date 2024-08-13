console.log('Ahmed is the 9th Raikage.')
console.log('Welcome to my Awesome Marvel API Site!')

/*
[ base url: https://gateway.marvel.com , api version: Cable ]
 
 :443/
 v1/public/characters
 ?name=${name}
 &limit=60
 &apikey=8e25d523ef0fbf038dde882b8f33d2a7
 
 https://gateway.marvel.com:443/v1/public/characters?name=${name}&limit=60&apikey=dlse8393489

 https://gateway.marvel.com:443/v1/public/characters?name=${name}&limit=60&apikey=8e25d523ef0fbf038dde882b8f33d2a7
 

*/

// Part 2
/*
  https://gateway.marvel.com:443/v1/public/characters?limit=9&apikey=8e25d523ef0fbf038dde882b8f33d2a7
*/

const characterSection = document.getElementById("character_section");
characterSection.innerHTML = "Change is going to come.<br/><hr/><br/>"
