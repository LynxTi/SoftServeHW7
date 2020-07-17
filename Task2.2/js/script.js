'use strict'

function createabbreviation (someStr) {
  const worlds = someStr.split(' ');
  const abbreviation = worlds.reduce((el) => {
    return str + el[0].toUpperCase();
  });
  
  return abbreviation;
}

console.log(createabbreviation('hello its me '));