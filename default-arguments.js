// http://www.codewars.com/kata/default-arguments/javascript

function defaultArguments(func, params) {
  var defaultArgs = [];
  
  var currentArgNames = func.toString()
                            .replace(/[/][/].*$/mg,'')
                            .replace(/\s+/g, '')
                            .replace(/[/][*][^/*]*[*][/]/g, '')
                            .split('(')[1]
                            .split(')')[0]
                            .split(',');

  if (!this.argNames || currentArgNames[0] !== '') {
    this.argNames = currentArgNames;
  }
  
  for (var i = 0; i < this.argNames.length; i++) {
    var defaultParam = params[this.argNames[i]];

    if (defaultParam) defaultArgs[i] = params[this.argNames[i]];
  }
  
  return function() {
    var currentArgs = defaultArgs.slice();
    var argsArray = [].slice.call(arguments);

    for (var i = 0; i < argsArray.length; i++) {
      var newArg = argsArray[i];
      
      currentArgs[i] = newArg;
    }
    
    return func.apply(null, currentArgs);
  }
}
