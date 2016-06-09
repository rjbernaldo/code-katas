// http://www.codewars.com/kata/javascript-magic-function/javascript

function MagicFunction() {
  var storedArgs = [].slice.call(arguments);
  
  function mf() {
    storedArgs = storedArgs.concat([].slice.call(arguments));
    
    return mf;
  }
  
  mf.valueOf = function() {
    storedArgs.map(function(n) {
      var parsedN = parseInt(n, 10);
      
      return isNaN(parsedN) ? 0 : parsedN;
    });
    
    return storedArgs.reduce(function(a,b) { return a+b; }, 0);
  }
  
  return mf;
}
