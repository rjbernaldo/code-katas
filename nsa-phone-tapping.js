// https://www.codewars.com/kata/nsa-phone-tapping/javascript

var NSA = {
  log: function(person) {
    if (person.history.length === 0) {
      return "No Entries";
    }
    
    var history = person.history.join("\n");
    person.history = [];
    
    return history;
  }
};

var Person = function(name) { 
  var self = this;
  
  this.name = name;
  this.history = [];
}

Person.prototype.call = function(phone, callee) {
  var message = this.name + " called " + callee.name + " from " + phone.owner.name + "\'s phone(" + phone.number + ")";
  this.history.push(message);
};

Person.prototype.text = function() { 
  var argsArray = [].slice.call(arguments);
  var phone = argsArray.shift();
  var recepients = argsArray;

  recepients.forEach(function(recepient) {
    var message = this.name + " texted " + recepient.name + " from " + phone.owner.name + "\'s phone(" + phone.number + ")";
    this.history.push(message);
  }.bind(this));
}
