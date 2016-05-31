// http://www.codewars.com/kata/word-finder/javascript

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  var result = [];
  
  this.words.forEach(function(word) {
    if (isAMatch(word, pattern)) {
      result.push(word);
    }
  });
  
  return result;
}

function isAMatch(word, pattern) {
  var isAMatch = word.length === pattern.length;
  
  if (isAMatch) {
    // I should really learn regex
    for (var i = 0; i < word.length; i++) {
      if (pattern[i] !== '?' && word[i] !== pattern[i]) return false;
    }
  }
  
  return isAMatch;
}
