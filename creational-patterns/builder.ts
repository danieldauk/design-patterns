interface HouseBuilder {
  reset(): void;
  addWalls(): void;
  addRoof(): void;
  addGarage(): void;
}

class StoneHouseBuilder implements HouseBuilder {
  house: House = new House();

  addWalls() {
    this.house.addPart('stone walls');
  }

  addRoof() {
    this.house.addPart('stone roof');
  }

  addGarage() {
    this.house.addPart('stone garage');
  }

  reset() {
    this.house = new House();
  }

  build() {
    const result = this.house;
    this.reset();
    return result;
  }
}

class WoodenHouseBuilder implements HouseBuilder {
  house: House = new House();

  addWalls() {
    this.house.addPart('wooden walls');
  }

  addRoof() {
    this.house.addPart('wooden roof');
  }

  addGarage() {
    this.house.addPart('wooden garage');
  }

  reset() {
    this.house = new House();
  }

  build() {
    const result = this.house;
    this.reset();
    return result;
  }
}

class House {
  parts: Array<string> = [];

  addPart(part: string) {
    this.parts.push(part);
  }

  listParts() {
    console.log(this.parts);
  }
}

class Director {
  builder: HouseBuilder;


  setBuilder(builder: HouseBuilder) {
    this.builder = builder;
  }


  buildBasicHouse() {
    this.builder.addWalls();
    this.builder.addRoof();
  }


  buildHouseWithGarage() {
    this.builder.addWalls();
    this.builder.addRoof();
    this.builder.addGarage();
  }
}

const director = new Director();

const woodenHouseBuilder = new WoodenHouseBuilder();
director.setBuilder(woodenHouseBuilder);
director.buildBasicHouse();
const basicWoodenHouse = woodenHouseBuilder.build();
console.log(basicWoodenHouse.listParts()); // [ 'wooden walls', 'wooden roof' ]

const stoneHouseBuilder = new StoneHouseBuilder();
director.setBuilder(stoneHouseBuilder);
director.buildBasicHouse();
const basicStoneHouse = stoneHouseBuilder.build();
console.log(basicStoneHouse.listParts()); // [ 'stone walls', 'stone roof' ]

director.buildHouseWithGarage();
const stoneHouseWithGarage = stoneHouseBuilder.build();
console.log(stoneHouseWithGarage.listParts()) // [ 'stone walls', 'stone roof', 'stone garage' ]

