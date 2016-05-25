// http://www.codewars.com/kata/find-the-odd-int/javascript

function findOdd(A) {
  var set = {};
  
  A.forEach(function(number) {
      var numberExistsInSet = !isNaN(set[number]);
      
      numberExistsInSet ? set[number]++ : set[number] = 1;
    });
  
  for (var key in set) {
      var valueIsOdd = set[key] % 2 === 1;
      
      if (valueIsOdd) {
            return parseInt(key);
          }
    }
  
  return 0;
}
