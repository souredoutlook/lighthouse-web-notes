class Pizza {

  constructor() {
    this.toppings = ["cheese"];
  }

  burnt() {
    this.burnt = true;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  // ...

  // replace our custom getters / setters with these ones!
  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size; ///see what we did there? 0.o
    }
  }
  
}

let pizza1 = new Pizza;

console.log(pizza1);

pizza1.addTopping("anchovies"); // yuck

console.log(pizza1);

pizza1.burnt()

console.log(pizza1);

pizza1.size = "s";

console.log(pizza1._size, pizza1.price, "$14 for a small burnt pizza!?!");