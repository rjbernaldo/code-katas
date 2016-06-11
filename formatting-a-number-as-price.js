// https://www.codewars.com/kata/formatting-a-number-as-price/javascript

var numberToPrice = function(number) {
  if (number.length === 0 || isNaN(number)) return 'NaN';
  
  number = number.toString().split('.');
  
  var int = number[0];
  var decimal = number[1];

  int = int.split('').reverse();
  
  var count = 0;
  for (var i = 0; i < int.length; i++) {
    if (count === 3 && int[i] !== '-') {
      int.splice(i, 0, ',');
      count = 0;
    } else {
      count++;
    }
  }
  
  var formattedInt = int.reverse().join('');
  var formattedDecimal = decimal ? (decimal + '0').substr(0,2) : '00';
  
  return [formattedInt, formattedDecimal].join('.');
}
