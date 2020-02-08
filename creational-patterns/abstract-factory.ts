interface Chair {
  sitOn(): void;
}

interface Bed {
  layOn(): void;
}

class VictorianChair implements Chair {
  sitOn() {
    console.log('Sitting on victorian chair')
  }
}

class ModernChair implements Chair {
  sitOn() {
    console.log('Sitting on modern chair')
  }
}

class VictorianBed implements Bed {
  layOn() {
    console.log('Laying on victorian bed')
  }
}

class ModernBed implements Bed {
  layOn() {
    console.log('Laying on modern bed')
  }
}

interface FurnitureFactory {
  createChair(): Chair;
  createBed(): Bed;
}

class VictorianFurnitureFactory implements FurnitureFactory {
  createChair() {
    return new VictorianChair();
  }
  createBed() {
    return new VictorianBed();
  }
}

class ModernFurnitureFactory implements FurnitureFactory {
  createChair() {
    return new ModernChair();
  }
  createBed() {
    return new ModernBed();
  }
}

const clientCode = (furnitureFactory: FurnitureFactory) => {
  const chair = furnitureFactory.createChair();
  const bed = furnitureFactory.createBed();
  chair.sitOn();
  bed.layOn();
}

clientCode(new ModernFurnitureFactory()); // Sitting on modern chair. Laying on modern bed
clientCode(new VictorianFurnitureFactory()); // Sitting on victorian chair. Laying on victorian bed