// http://www.codewars.com/kata/a-chain-adding-function/javascript

function add(n){
  return (function (n) {
    var _add = arguments.callee;
    
    _add.storedValues ? _add.storedValues.push(n) : _add.storedValues = [n];
    
    _add.toString = function() {
      return _add.storedValues.reduce(function(a,b) { return a + b }, 0);
    }
    
    return _add;
  })(n);
}
