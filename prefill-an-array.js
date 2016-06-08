// http://www.codewars.com/kata/prefill-an-array/javascript

function prefill(n, v) {
  try{
    var nInt = parseInt(n,10);
    var isNotInt = nInt !== n;
    var isNotString = typeof n !== 'string';
    
    if (isNotInt && isNotString) {
      throw new TypeError(n + ' is invalid');
    }
    
    return new Array(nInt).fill(v);
  } catch(e) {
    throw new TypeError(n + ' is invalid');
  }
}
