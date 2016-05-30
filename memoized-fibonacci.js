// http://www.codewars.com/kata/memoized-fibonacci/javascript

var fibonacci = function(n) {
  if (!this.memo) {
    this.memo = {
      0: 0,
      1: 1
    };
  }
  
  if (isNaN(this.memo[n])) {
    this.memo[n] = fibonacci(n-1) + fibonacci(n-2);
  }
    
  return this.memo[n];
}
