'use strict'

function decodeMorse (morseLine) {
  let decodeWords = [];
  const words = morseLine.split('   ');
 
  const morseCode = {
    '.-' : 'A',
    '-...' : 'B',
    '.--' : 'W',
    '--.' : 'G',
    '-..' : 'D',
    '.' : 'E',
    '...' : 'V',
    '--..' : 'Z',
    '..' : 'I',
    '.---' : 'J',
    '-.-' : 'K',
    '.-..' : 'L',
    '--' : 'M',
    '-.' : 'N',
    '---' : 'O',
    '.--.' : 'P',
    '.-.' : 'R',
    '...' : 'S',
    '-' : 'T',
    '..-' : 'U',
    '..-.' : 'F',
    '....' : 'H',
    '-.-.' : 'C',
    '--.-' : 'Q',
    '-..-' : 'Y',
    '-.--' : 'X',
    '...---...' : 'SOS',
    '.----' : '1',
    '..---' : '2',
    '...--' : '3',
    '....-' : '4',
    '.....' : '5',
    '-....' : '6',
    '-...' : '7',
    '---..' : '8',
    '----.' : '9',
    '-----' : '0',
    '' : '',
    ' ' : '',
    ' ' : '',
    '......' : '.',
    '.-.-.-' : ',',
    '---...' : ':',
    ' -.-.-' : ';',
    '..--..' : '?',
    '--..--' : '!'
  }

  for (const word of words) {
     const decodeWord = word.split(' ').reduce((textLine, elem) => {
      return textLine + morseCode[elem];
    },'');
  
      decodeWords.push(decodeWord);
  }

  return decodeWords.join(' ');
}

console.log(decodeMorse(' ...---...   .... . -.--   .--- ..- -.. . '));