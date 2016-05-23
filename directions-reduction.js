// http://www.codewars.com/kata/directions-reduction/javascript

function dirReduc(arr){
  var satisfied = false;
  
  while (!satisfied) {
    var clean = true;
    
    for (var i = 0; i < arr.length - 1; i++) {
      var current = arr[i];
      var next = arr[i+1];
      
      var isOpposite = 
        current === "NORTH" && next === "SOUTH" || 
        current === "SOUTH" && next === "NORTH" ||
        current === "EAST" && next === "WEST" || 
        current === "WEST" && next === "EAST";
        
      if (isOpposite) {
        arr.splice(i, 2);
        clean = false;
      }
    }
    
    if (clean) {
      satisfied = true;
    }
  }
  
  return arr;
}

