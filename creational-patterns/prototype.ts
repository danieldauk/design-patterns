interface BikePrototype {
  clone(): BikePrototype;
}


class Bike implements BikePrototype {
  numberOfWheels = 2;
  createdAt = new Date();

  clone() {
    const clone = Object.create(this);
    clone.createdAt = new Date(this.createdAt.getTime());

    return clone;
  }
}

const clientCode = () => {
  const bike = new Bike();
  const clone = bike.clone();

  const arePrimitiveValuesEqual = bike.numberOfWheels === clone.numberOfWheels;
  if (arePrimitiveValuesEqual) {
    console.log('Primitive field value has been cloned');
  }

  const areDifferentReferences = bike.createdAt !== clone.createdAt;
  const areReferenceValuesEqual = bike.createdAt.getTime() === clone.createdAt.getTime();

  if (areDifferentReferences && areReferenceValuesEqual) {
    console.log('Reference value has been cloned')
  }
}

clientCode();
// Primitive field value has been cloned
// Reference value has been cloned

export {}