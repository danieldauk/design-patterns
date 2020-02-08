abstract class ShippingCompany {
  public abstract getTransport(): Transport;

  public ship(): void {
    const transport = this.getTransport();
    const transportName = transport.getName();

    console.log(`Shipping on ${transportName}`);
  }
}

interface Transport {
  getName(): string;
}

class Truck implements Transport {
  name = 'Truck'
  
  getName() {
    return this.name;
  }
}

class Ship implements Transport {
  name = 'Ship'
  
  getName() {
    return this.name;
  }
}

class DFDS extends ShippingCompany {
  getTransport() {
    return new Ship();
  }
}

class Girteka extends ShippingCompany {
  getTransport() {
    return new Truck();
  }
}

const clientCode = (shippingCompany: ShippingCompany) => {
  console.log(shippingCompany.ship())
}

clientCode(new DFDS()) // Shipping on Ship
clientCode(new Girteka()) // Shipping on Truck