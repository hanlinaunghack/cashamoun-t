class Cash {
  constructor(num) {
    this.num = num;
    this.double;
  }
  totalInPennies() {
    let x = Number(this.num) ? this.num.toFixec(2) : NaN;
    return x * 100;
  }
  addDoubleAmount(amnt) {
    this.double = this.num + amnt;
    this.num += amnt;
  }
  toDouble() {
    if (this.num) {
      return this.num;
    }
  }
  toDoubleString() {
    if (this.num) {
      return this.num.toString();
    }
  }
  quantityOfEachDenomination() {
    let x = this.num;
    let obj = {};
    let factor = [100, 50, 20, 10, 5, 1, 0.5, 0.25, 0.01];

    for (var i = 0; i < factor.length; i++) {
      if (Math.floor(x / factor[i]) > 0) {
        obj[factor[i]] = Math.floor(x / factor[i]);
        x = x % factor[i];
        console.log(x);
      }
    }
    return obj;
  }
}
const obj = {
  hundreds: 9,
  fifties: 1,
  twenties: 0,
  tens: 1,
  fives: 1,
  ones: 2,
  quarters: 3,
  dimes: 1,
  nickels: 1,
  pennies: 3
};
const cash = new CashAmount(10.5);
cash.addDoubleAmount(29.33);
cash.toDouble(); // -> 39.83

const cash = new CashAmount(10.5);
cash.addDoubleAmount(29.33);
cash.toDoubleString(); // -> '39.83'
