interface PizzaInterface {
  getPrice(): number;
  getDescription(): string;
}

class Pizza implements PizzaInterface {
  getPrice() {
    return 5;
  }
  getDescription() {
    return 'Tasty pizza';
  }
}

abstract class PizzaDecorator implements PizzaInterface {
  protected pizza: PizzaInterface;

  constructor(pizza: PizzaInterface) {
    this.pizza = pizza;
  }

  getPrice() {
    return this.pizza.getPrice();
  }

  getDescription() {
    return this.pizza.getDescription();
  }
}

class CheeseDecorator extends PizzaDecorator {
  getDescription() {
    const pizzaDescription = this.pizza.getDescription();
    return `${pizzaDescription} with cheese`;
  }
}

class PackingDecorator extends PizzaDecorator {
  getPrice() {
    const pizzaPrice = this.pizza.getPrice();
    return pizzaPrice + 0.99;
  }
}

const clientCode = () => {
  const pizza = new Pizza();
  console.log(pizza.getDescription()); // Tasty pizza
  console.log(pizza.getPrice()); // 5

  const pizzaWithCheese = new CheeseDecorator(new Pizza());
  console.log(pizzaWithCheese.getDescription()); // Tasty pizza with cheese
  console.log(pizzaWithCheese.getPrice()); // 5

  const packedPizzaWithCheese = new PackingDecorator((new CheeseDecorator(new Pizza())));
  console.log(packedPizzaWithCheese.getDescription()); // Tasty pizza with cheese
  console.log(packedPizzaWithCheese.getPrice()); // 5.99
}

clientCode();

export {}