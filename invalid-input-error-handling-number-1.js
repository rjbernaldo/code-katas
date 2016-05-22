// http://www.codewars.com/kata/invalid-input-error-handling-number-1/javascript

function getCount(word) {
  var result = { vowels: 0, consonants: 0 };
  
  if (typeof word !== 'string') return result;
  
  word.split('').forEach(function(letter) {
      var vowelList = 'aeiou';
      var consonantList = 'bcdfghjklmnpqrstvwxyz';
      
      letter = letter.toLowerCase();
      
      if (vowelList.indexOf(letter) > -1) {
            result.vowels++;
          } else if (consonantList.indexOf(letter) > -1) {
                result.consonants++;
              }
    });
  
  return result;
}
