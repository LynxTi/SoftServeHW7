'use strict'

function createCamelCase (someStr) {
  const worlds = someStr.split(' ');

  const camelCaseLine = worlds.reduce( (firstElem, secondElem) => {
    const firstChar = secondElem[0].toUpperCase();
    
     const newStr = secondElem.replace(secondElem[0],firstChar.toUpperCase());
    
    return firstElem + newStr ;
  });
  
  return camelCaseLine;
}

console.log(createCamelCase('qqqq wwww eee r tt'));
