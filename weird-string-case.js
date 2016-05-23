// http://www.codewars.com/kata/weird-string-case/javascript

function toWeirdCase(string){
  return string.split(' ').map(determineWord).join(' ');
}

function determineWord(word) {
  return word.split('').map(determineCase).join('');
}

function determineCase(letter, index) {
  return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
}
