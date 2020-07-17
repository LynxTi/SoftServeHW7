'use strict'

function urlResearch (url) {
  let textLine = url;

  const protocol = textLine.split('://')[0];
  textLine = textLine.split('://')[1];

  const domain = textLine.split('/')[0];
  const path = textLine.replace(domain + '/', '');

  return `протокол: ${protocol}, домен: ${domain}, путь:${path}`; 
}

console.log(urlResearch('https://career.softserveinc.com/en-us/learning-and-certification/formats-2/'));