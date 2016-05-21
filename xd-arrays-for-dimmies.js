// http://www.codewars.com/kata/xd-arrays-for-dimmies/javascript

function dim(){
  var currentArgs = [].splice.call(arguments, 0);
  var result;

  if (currentArgs.length > 3) {    
      result = calc(currentArgs[0], dim.apply(null, currentArgs.slice(1)));
    } else if (currentArgs.length === 3) {
        result =  calc(currentArgs[0], calc(currentArgs[1], currentArgs[2]));
      } else {
          result =  calc(currentArgs[0], currentArgs[1]);
        }
  
  return result;
}

function calc(currentCount, elem) {
  var parent = []
  
  for (var i = 0; i < currentCount; i++) {
      var val;
      
      switch(typeof elem) {
            case 'function':
              val = elem();
              break;
            case 'object':
              val = JSON.parse(JSON.stringify(elem));
              break;
            default:
              val = elem;
              break;
          }
      
      parent.push(val);
    }
  
  return parent;
}
