//http://www.codewars.com/kata/valid-parentheses/javascript

function validParentheses(parens){
  var openCount = 0;
  
  parens.split('').forEach(function(paren) {
    var openCountIsInvalid = !isNaN(openCount);
    
    if (openCountIsInvalid && paren === '(') {
      openCount++;
    } else if (openCountIsInvalid && openCount > 0) {
      openCount--;
    } else {
      openCount = null;
    }
  });
  
  return openCount === 0;
}
