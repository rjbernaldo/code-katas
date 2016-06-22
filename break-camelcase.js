// https://www.codewars.com/kata/break-camelcase/javascript

function solution(string) {
  var strArr = string.split('');
  
  for (var i = 0; i < strArr.length; i++) {
    var isUpperCase = strArr[i].charCodeAt() >= 65 && strArr[i].charCodeAt() <= 90;
    
    if (isUpperCase) {
      strArr.splice(i, 0, ' ');
      i++;
    }
  }
  
  return strArr.join('');
}

