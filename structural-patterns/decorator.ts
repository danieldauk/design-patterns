interface PizzaInterface {
  getDescription(): string;
}

class Pizza implements PizzaInterface {
  getDescription() {
    return 'Tasty pizza';
  }
}

abstract class PizzaDecorator implements PizzaInterface {
  protected pizza: PizzaInterface;

  constructor(pizza: PizzaInterface) {
    this.pizza = pizza;
  }

  getDescription() {
    return this.pizza.getDescription();
  }
}

class CheeseDecorator extends PizzaDecorator {
  getDescription() {
    const pizzaDescription = this.pizza.getDescription();
    if (pizzaDescription.includes('with')) {
      return `${pizzaDescription} and cheese`;
    }
    return `${pizzaDescription} with cheese`;
  }
}

class BaconDecorator extends PizzaDecorator {
  getDescription() {
    const pizzaDescription = this.pizza.getDescription();
    if (pizzaDescription.includes('with')) {
      return `${pizzaDescription} and bacon`;
    }
    return `${pizzaDescription} with bacon`;
  }
}

const clientCode = () => {
  const pizza = new Pizza();
  console.log(pizza.getDescription()); // Tasty pizza

  const pizzaWithCheese = new CheeseDecorator(new Pizza());
  console.log(pizzaWithCheese.getDescription()); // Tasty pizza with cheese

  const pizzaWithBacon = new BaconDecorator(new Pizza());
  console.log(pizzaWithBacon.getDescription()); // Tasty pizza with bacon

  const pizzaWithCheeseAndBacon = new BaconDecorator(new CheeseDecorator(new Pizza()));
  console.log(pizzaWithCheeseAndBacon.getDescription()); // Tasty pizza with cheese and bacon
}

clientCode();

export {}