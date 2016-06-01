// http://www.codewars.com/kata/the-fruit-juice/javascript

class Jar {
  constructor() {
    this.concentration = {};
  }
  
  add(amount, kind) {
    if (this.concentration[kind]) {
      this.concentration[kind] += amount;
    } else {
      this.concentration[kind] = amount;
    }
  }
  
  pourOut(amount) {
    let totalAmount = this.getTotalAmount();
    
    for (let concentrate of Object.keys(this.concentration)) {
      let percentagePerConcentrate = amount / totalAmount;
      let amountPerConcentrate = this.concentration[concentrate] * percentagePerConcentrate;
      
      this.concentration[concentrate] -= amountPerConcentrate;
    }
  }
  
  getTotalAmount() {
    let totalAmount = 0;
    
    for (let concentrate of Object.keys(this.concentration)) {
      totalAmount += this.concentration[concentrate];
    }
    
    return totalAmount;
  }
  
  getConcentration(currentConcentrate) {
    let totalAmount = this.getTotalAmount();
    let concentrateAmount = 0;
    
    if (this.concentration[currentConcentrate]) concentrateAmount = this.concentration[currentConcentrate] / totalAmount;
    
    return concentrateAmount;
  }
}
